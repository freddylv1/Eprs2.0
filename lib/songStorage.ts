/**
 * 英文歌學習專區 localStorage 持久化狀態管理
 * 
 * 核心規範：
 * - 將每首歌的 progress (目前練習的句子索引)、loop (是否開啟單句循環)、以及 playbackSpeed (播放速度)
 *   封裝在以 songTitle 為 Key 的物件中存入 localStorage ('eprs_song_settings_by_title')。
 * - 確保每首歌具備獨立設置，切換歌曲時絕不互相干擾。
 * - 具備向後相容性與無縫備援機制。
 */

export interface SongUserState {
  progress: number; // 目前練習句子索引 (0 ~ song.lines.length - 1)
  loop: boolean; // 是否開啟單句循環 (true / false)
  playbackSpeed: number; // 播放速度 (例如 0.7, 0.85, 1.0)
  lastUpdated?: number;
}

export interface SongProgressState extends SongUserState {
  // 保持相容性別名
  lineIndex: number;
  isSingleLoop: boolean;
  speechRate: number;
}

const STORAGE_MAP_KEY = 'eprs_song_settings_by_title';
const LEGACY_STORAGE_PREFIX = 'eprs_song_progress_';
const LAST_SONG_KEY = 'eprs_last_song_id';

const DEFAULT_STATE: SongUserState = {
  progress: 0,
  loop: false,
  playbackSpeed: 0.85,
};

/**
 * 讀取以 songTitle 為 Key 的全歌曲設定物件
 */
export function getAllSongSettingsMap(): Record<string, SongUserState> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(STORAGE_MAP_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return typeof parsed === 'object' && parsed !== null ? parsed : {};
  } catch {
    return {};
  }
}

/**
 * 讀取特定歌曲 (以 songTitle 為 Key) 的進度與播放設定
 */
export function getSongSettingsByTitle(
  songTitle: string,
  maxLines?: number
): SongProgressState {
  if (typeof window === 'undefined') {
    return {
      ...DEFAULT_STATE,
      lineIndex: DEFAULT_STATE.progress,
      isSingleLoop: DEFAULT_STATE.loop,
      speechRate: DEFAULT_STATE.playbackSpeed,
    };
  }

  try {
    const map = getAllSongSettingsMap();
    let record = map[songTitle];

    // 若新格式中尚未儲存，嘗試從舊版 ID 格式遷移相容
    if (!record) {
      try {
        const legacyKey = `${LEGACY_STORAGE_PREFIX}${songTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
        const legacyRaw = localStorage.getItem(legacyKey);
        if (legacyRaw) {
          const parsed = JSON.parse(legacyRaw);
          record = {
            progress: typeof parsed.lineIndex === 'number' ? parsed.lineIndex : 0,
            loop: Boolean(parsed.isSingleLoop),
            playbackSpeed: typeof parsed.speechRate === 'number' ? parsed.speechRate : 0.85,
            lastUpdated: parsed.lastUpdated,
          };
        }
      } catch {}
    }

    if (!record) {
      record = { ...DEFAULT_STATE };
    }

    const rawProgress = typeof record.progress === 'number' ? record.progress : 0;
    const progress =
      rawProgress >= 0
        ? maxLines !== undefined && maxLines > 0
          ? Math.min(rawProgress, maxLines - 1)
          : rawProgress
        : 0;

    const loop = Boolean(record.loop);
    const playbackSpeed =
      typeof record.playbackSpeed === 'number' &&
      record.playbackSpeed >= 0.5 &&
      record.playbackSpeed <= 2.0
        ? record.playbackSpeed
        : 0.85;

    return {
      progress,
      loop,
      playbackSpeed,
      lineIndex: progress,
      isSingleLoop: loop,
      speechRate: playbackSpeed,
      lastUpdated: record.lastUpdated,
    };
  } catch {
    return {
      ...DEFAULT_STATE,
      lineIndex: DEFAULT_STATE.progress,
      isSingleLoop: DEFAULT_STATE.loop,
      speechRate: DEFAULT_STATE.playbackSpeed,
    };
  }
}

/**
 * 保存特定歌曲 (以 songTitle 為 Key) 的進度、loop 與 playbackSpeed 狀態至 localStorage
 */
export function saveSongSettingsByTitle(
  songTitle: string,
  update: Partial<SongUserState> & {
    lineIndex?: number;
    isSingleLoop?: boolean;
    speechRate?: number;
  }
): void {
  if (typeof window === 'undefined' || !songTitle) return;

  try {
    const map = getAllSongSettingsMap();
    const current = map[songTitle] || { ...DEFAULT_STATE };

    const newProgress =
      update.progress !== undefined
        ? update.progress
        : update.lineIndex !== undefined
        ? update.lineIndex
        : current.progress;

    const newLoop =
      update.loop !== undefined
        ? update.loop
        : update.isSingleLoop !== undefined
        ? update.isSingleLoop
        : current.loop;

    const newSpeed =
      update.playbackSpeed !== undefined
        ? update.playbackSpeed
        : update.speechRate !== undefined
        ? update.speechRate
        : current.playbackSpeed;

    const updatedRecord: SongUserState = {
      progress: Math.max(0, newProgress),
      loop: Boolean(newLoop),
      playbackSpeed: Math.max(0.5, Math.min(2.0, newSpeed)),
      lastUpdated: Date.now(),
    };

    map[songTitle] = updatedRecord;
    localStorage.setItem(STORAGE_MAP_KEY, JSON.stringify(map));
  } catch (err) {
    console.error('Failed to save song settings by title to localStorage:', err);
  }
}

/**
 * 相容舊函式介面：以 songId 或 songTitle 讀取
 */
export function getSongProgress(
  songTitleOrId: string,
  maxLines?: number
): SongProgressState {
  return getSongSettingsByTitle(songTitleOrId, maxLines);
}

/**
 * 相容舊函式介面：以 songId 或 songTitle 保存
 */
export function saveSongProgress(
  songTitleOrId: string,
  progress: Partial<SongProgressState>
): void {
  saveSongSettingsByTitle(songTitleOrId, progress);
}

/**
 * 讀取使用者上次選擇的歌曲 ID
 */
export function getLastSelectedSongId(defaultSongId: string): string {
  if (typeof window === 'undefined') return defaultSongId;
  try {
    const saved = localStorage.getItem(LAST_SONG_KEY);
    return saved || defaultSongId;
  } catch {
    return defaultSongId;
  }
}

/**
 * 保存使用者上次選擇的歌曲 ID
 */
export function saveLastSelectedSongId(songId: string): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(LAST_SONG_KEY, songId);
  } catch (err) {
    console.error('Failed to save last selected song id:', err);
  }
}
