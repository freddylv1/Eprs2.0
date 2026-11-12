'use client';

import { WordItem } from './types';

export type Mp3ExportMode = '4step' | '3step';

export interface Mp3ExportProgress {
  status: 'idle' | 'generating' | 'completed' | 'error';
  currentWordIndex: number;
  totalWords: number;
  percent: number;
  currentWord: string;
  errorMessage?: string;
}

/**
 * 抓取單一語音文字之 ArrayBuffer，解碼為 AudioBuffer
 * 優先透過 /api/tts 同網域代理伺服器（避開瀏覽器 CORS 跨域封鎖）
 */
async function fetchAudioBuffer(
  ctx: AudioContext,
  text: string,
  lang: 'en' | 'zh'
): Promise<AudioBuffer | null> {
  const clean = text.replace(/\(.*?\)/g, '').replace(/[\/\.]/g, ' ').trim();
  if (!clean) return null;

  const encoded = encodeURIComponent(clean);
  const urls: string[] = [
    `/api/tts?text=${encoded}&lang=${lang}`,
    `https://dict.youdao.com/dictvoice?audio=${encoded}&type=${lang === 'en' ? 2 : 1}`,
    `https://translate.google.com/translate_tts?ie=UTF-8&q=${encoded}&tl=${lang === 'en' ? 'en' : 'zh-TW'}&client=tw-ob`
  ];

  for (const url of urls) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 6000);
      const res = await fetch(url, { signal: controller.signal });
      clearTimeout(timeoutId);

      if (res.ok) {
        const arrayBuf = await res.arrayBuffer();
        if (arrayBuf.byteLength > 200) {
          // 使用 arrayBuf.slice(0) 防止在解碼過程中陣列緩衝區被分離
          const decoded = await ctx.decodeAudioData(arrayBuf.slice(0));
          if (decoded && decoded.length > 0) {
            return decoded;
          }
        }
      }
    } catch (err) {
      console.warn(`[MP3 Export] TTS fetch failed from ${url}:`, err);
    }
  }

  return null;
}

/**
 * 建立指定長度 (秒) 的靜音 AudioBuffer
 */
function createSilenceBuffer(ctx: AudioContext, durationSec: number): AudioBuffer {
  const sampleRate = ctx.sampleRate;
  const numSamples = Math.max(1, Math.floor(sampleRate * durationSec));
  return ctx.createBuffer(1, numSamples, sampleRate);
}

/**
 * 將多個 AudioBuffer 串接為單一 AudioBuffer
 */
function concatenateBuffers(ctx: AudioContext, buffers: AudioBuffer[]): AudioBuffer {
  const validBuffers = buffers.filter(b => b && b.length > 0);
  if (validBuffers.length === 0) {
    return ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
  }

  let totalLength = 0;
  for (const buf of validBuffers) {
    totalLength += buf.length;
  }

  const result = ctx.createBuffer(1, totalLength, ctx.sampleRate);
  const channelData = result.getChannelData(0);
  let offset = 0;

  for (const buf of validBuffers) {
    const data = buf.getChannelData(0);
    channelData.set(data, offset);
    offset += buf.length;
  }

  return result;
}

/**
 * 將 AudioBuffer 轉換為標準 16-bit PCM WAVE/MP3 相容 Blob
 */
function audioBufferToWavBlob(buffer: AudioBuffer): Blob {
  const numChannels = 1;
  const sampleRate = buffer.sampleRate;
  const format = 1; // PCM
  const bitDepth = 16;

  const data = buffer.getChannelData(0);
  const numSamples = data.length;
  const blockAlign = numChannels * (bitDepth / 8);
  const byteRate = sampleRate * blockAlign;
  const dataSize = numSamples * (bitDepth / 8);
  const chunkSize = 36 + dataSize;

  const arrayBuffer = new ArrayBuffer(44 + dataSize);
  const view = new DataView(arrayBuffer);

  const writeString = (offset: number, str: string) => {
    for (let i = 0; i < str.length; i++) {
      view.setUint8(offset + i, str.charCodeAt(i));
    }
  };

  writeString(0, 'RIFF');
  view.setUint32(4, chunkSize, true);
  writeString(8, 'WAVE');
  writeString(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, format, true);
  view.setUint16(22, numChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, byteRate, true);
  view.setUint16(32, blockAlign, true);
  view.setUint16(34, bitDepth, true);
  writeString(36, 'data');
  view.setUint32(40, dataSize, true);

  let offset = 44;
  for (let i = 0; i < data.length; i++) {
    let sample = Math.max(-1, Math.min(1, data[i]));
    sample = sample < 0 ? sample * 0x8000 : sample * 0x7FFF;
    view.setInt16(offset, Math.floor(sample), true);
    offset += 2;
  }

  return new Blob([arrayBuffer], { type: 'audio/wav' });
}

/**
 * 為指定單元的單字陣列動態生成 4 步驟 / 3 步驟練習 MP3 音訊檔
 */
export async function generateUnitAudio(
  words: WordItem[],
  mode: Mp3ExportMode = '4step',
  onProgress?: (progress: Mp3ExportProgress) => void
): Promise<Blob> {
  const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
  const ctx = new AudioCtx();
  if (ctx.state === 'suspended') {
    await ctx.resume();
  }

  try {
    const audioChunks: AudioBuffer[] = [];
    const pauseBetweenSteps = createSilenceBuffer(ctx, 0.6);
    const pauseBetweenWords = createSilenceBuffer(ctx, 1.2);
    const pauseBetweenSyllables = createSilenceBuffer(ctx, 0.6); // 音節間「停一下」間隔

    const totalWords = words.length;

    for (let i = 0; i < words.length; i++) {
      const wordItem = words[i];
      const percent = Math.round(((i + 1) / totalWords) * 100);

      onProgress?.({
        status: 'generating',
        currentWordIndex: i + 1,
        totalWords,
        percent,
        currentWord: wordItem.word
      });

      // 1. 英文整字朗讀
      const enBuffer = await fetchAudioBuffer(ctx, wordItem.word, 'en');
      if (enBuffer) audioChunks.push(enBuffer);
      audioChunks.push(pauseBetweenSteps);

      // 2. 中文釋義朗讀
      if (wordItem.chinese) {
        const zhBuffer = await fetchAudioBuffer(ctx, wordItem.chinese, 'zh');
        if (zhBuffer) audioChunks.push(zhBuffer);
        audioChunks.push(pauseBetweenSteps);
      }

      // 3. 英文重複朗讀
      const enRepeatBuffer = await fetchAudioBuffer(ctx, wordItem.word, 'en');
      if (enRepeatBuffer) audioChunks.push(enRepeatBuffer);

      // 4. 按音節逐字母拼讀 : 先逐字母唸完第1音節字母，停一下、在逐字母唸下一個音節的字母 (同一音節字母連續不中斷，由同一個人聲朗讀)
      if (mode === '4step' && wordItem.syllables && wordItem.syllables.length > 0) {
        audioChunks.push(pauseBetweenSteps);
        
        for (let sIdx = 0; sIdx < wordItem.syllables.length; sIdx++) {
          const syl = wordItem.syllables[sIdx];
          const letters = syl.replace(/[^a-zA-Z]/g, '').split('');

          if (letters.length > 0) {
            // 嚴格保持單獨字母發音（A 唸 /eɪ/，B 唸 /biː/），以句點加逗號分隔 (如 "C.,  A.,  T.")，確保不拼出單字，語速放慢且字字清晰
            const spellingQuery = letters.map(l => `${l.toUpperCase()}.`).join(',  ');

            let sylSpellingBuffer = await fetchAudioBuffer(ctx, spellingQuery, 'en');

            // 若整句抓取失敗，自動回退為逐字母獨立抓取並插入 0.25 秒靜音間隔串接
            if (!sylSpellingBuffer) {
              const letterBuffers: AudioBuffer[] = [];
              for (const l of letters) {
                const lQuery = `${l.toUpperCase()}.`;
                const lBuf = await fetchAudioBuffer(ctx, lQuery, 'en');
                if (lBuf) {
                  letterBuffers.push(lBuf);
                  letterBuffers.push(createSilenceBuffer(ctx, 0.25)); // 字母間明顯 0.25s 停頓
                }
              }
              if (letterBuffers.length > 0) {
                sylSpellingBuffer = concatenateBuffers(ctx, letterBuffers);
              }
            }

            if (sylSpellingBuffer) {
              audioChunks.push(sylSpellingBuffer);
            }
            // 逐字母唸完該音節後「停一下」
            audioChunks.push(pauseBetweenSyllables);
          } else {
            const sylBuffer = await fetchAudioBuffer(ctx, syl, 'en');
            if (sylBuffer) {
              audioChunks.push(sylBuffer);
              audioChunks.push(pauseBetweenSyllables);
            }
          }
        }
      }

      // 單字間間隔
      audioChunks.push(pauseBetweenWords);
    }

    const mergedBuffer = concatenateBuffers(ctx, audioChunks);
    const blob = audioBufferToWavBlob(mergedBuffer);

    onProgress?.({
      status: 'completed',
      currentWordIndex: totalWords,
      totalWords,
      percent: 100,
      currentWord: ''
    });

    return blob;
  } finally {
    try {
      await ctx.close();
    } catch {}
  }
}

/**
 * 觸發瀏覽器下載音訊檔案
 */
export function triggerBlobDownload(blob: Blob, filename: string) {
  try {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      if (a.parentNode) {
        document.body.removeChild(a);
      }
      URL.revokeObjectURL(url);
    }, 2000);
  } catch (err) {
    console.error('[MP3 Export] triggerBlobDownload failed:', err);
  }
}
