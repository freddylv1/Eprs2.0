import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const text = searchParams.get('text');
  const lang = searchParams.get('lang') || 'en';

  if (!text) {
    return NextResponse.json({ error: 'Text parameter required' }, { status: 400 });
  }

  const clean = text.replace(/\(.*?\)/g, '').trim();
  if (!clean) {
    return NextResponse.json({ error: 'Cleaned text is empty' }, { status: 400 });
  }

  const sanitized = clean.replace(/[\/]/g, ' ');
  let queryText = sanitized;

  if (lang === 'en' && (sanitized.toUpperCase() === 'A' || sanitized.toUpperCase() === 'A.' || sanitized.toLowerCase() === 'a')) {
    queryText = 'A.'; // 確保字母 A 必定讀作字母名稱 /eɪ/ (ㄟ/ㄝ)，避免 ay 讀成 Aye (/aɪ/ 哀) 或冠詞 (/ə/ 啊)
  } else if (lang === 'en' && sanitized.length === 1) {
    queryText = sanitized.toUpperCase() + '.';
  }
  const encoded = encodeURIComponent(queryText);
  const encodedWithDot = encodeURIComponent(queryText + '.');

  const urls: string[] = [];

  if (lang === 'zh' || lang === 'zh-TW') {
    urls.push(
      `https://translate.google.com/translate_tts?ie=UTF-8&q=${encoded}&tl=zh-TW&client=tw-ob`,
      `https://dict.youdao.com/dictvoice?audio=${encoded}&type=1`
    );
  } else {
    // 英文：優先使用 Google Translate TTS（支援單字、多字母連讀、句調一致性人聲），備用 Youdao
    urls.push(
      `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodedWithDot}&tl=en&client=tw-ob`,
      `https://translate.google.com/translate_tts?ie=UTF-8&q=${encoded}&tl=en&client=tw-ob`,
      `https://dict.youdao.com/dictvoice?audio=${encoded}&type=2`
    );
  }

  for (const url of urls) {
    try {
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
      });

      if (res.ok) {
        const arrayBuf = await res.arrayBuffer();
        if (arrayBuf.byteLength > 200) {
          return new NextResponse(arrayBuf, {
            status: 200,
            headers: {
              'Content-Type': 'audio/mpeg',
              'Cache-Control': 'public, max-age=86400, s-maxage=86400',
              'Access-Control-Allow-Origin': '*'
            }
          });
        }
      }
    } catch (err) {
      console.warn(`TTS fetch failed for ${url}:`, err);
    }
  }

  return NextResponse.json({ error: 'Failed to synthesize audio from sources' }, { status: 502 });
}
