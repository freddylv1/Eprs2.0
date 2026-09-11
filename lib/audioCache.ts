'use client';

// 資料庫名稱與版本
const DB_NAME = 'EprsAudioCacheDB';
const DB_VERSION = 1;
const STORE_NAME = 'audio_files';

export interface CachedAudioRecord {
  word: string;
  blob: Blob;
  mimeType: string;
  createdAt: number;
}

class PhonicsIndexedDBCache {
  private db: IDBDatabase | null = null;
  private initPromise: Promise<IDBDatabase | null> | null = null;

  constructor() {
    if (typeof window !== 'undefined' && 'indexedDB' in window) {
      this.initPromise = this.initDB();
    }
  }

  private initDB(): Promise<IDBDatabase | null> {
    return new Promise((resolve) => {
      try {
        const request = window.indexedDB.open(DB_NAME, DB_VERSION);

        request.onupgradeneeded = (event) => {
          const db = (event.target as IDBOpenDBRequest).result;
          if (!db.objectStoreNames.contains(STORE_NAME)) {
            db.createObjectStore(STORE_NAME, { keyPath: 'word' });
          }
        };

        request.onsuccess = (event) => {
          this.db = (event.target as IDBOpenDBRequest).result;
          resolve(this.db);
        };

        request.onerror = (err) => {
          console.warn('[EPRS Audio Cache] IndexedDB open error, continuing with fallback:', err);
          resolve(null);
        };
      } catch (e) {
        console.warn('[EPRS Audio Cache] IndexedDB not available in this environment:', e);
        resolve(null);
      }
    });
  }

  /**
   * 取得已快取的真人音檔 Blob
   */
  public async getAudioBlob(word: string): Promise<Blob | null> {
    const cleanKey = word.toLowerCase().trim();
    if (!this.db && this.initPromise) {
      this.db = await this.initPromise;
    }
    if (!this.db) return null;

    return new Promise((resolve) => {
      try {
        const tx = this.db!.transaction(STORE_NAME, 'readonly');
        const store = tx.objectStore(STORE_NAME);
        const req = store.get(cleanKey);

        req.onsuccess = () => {
          const res = req.result as CachedAudioRecord | undefined;
          if (res && res.blob) {
            resolve(res.blob);
          } else {
            resolve(null);
          }
        };

        req.onerror = () => resolve(null);
      } catch (e) {
        resolve(null);
      }
    });
  }

  /**
   * 儲存真人音檔 Blob 至 IndexedDB
   */
  public async saveAudioBlob(word: string, blob: Blob): Promise<boolean> {
    const cleanKey = word.toLowerCase().trim();
    if (!this.db && this.initPromise) {
      this.db = await this.initPromise;
    }
    if (!this.db) return false;

    return new Promise((resolve) => {
      try {
        const tx = this.db!.transaction(STORE_NAME, 'readwrite');
        const store = tx.objectStore(STORE_NAME);
        const record: CachedAudioRecord = {
          word: cleanKey,
          blob,
          mimeType: blob.type || 'audio/mpeg',
          createdAt: Date.now()
        };
        const req = store.put(record);

        req.onsuccess = () => resolve(true);
        req.onerror = () => resolve(false);
      } catch (e) {
        resolve(false);
      }
    });
  }

  /**
   * 取得目前已快取的音檔總數
   */
  public async getCachedCount(): Promise<number> {
    if (!this.db && this.initPromise) {
      this.db = await this.initPromise;
    }
    if (!this.db) return 0;

    return new Promise((resolve) => {
      try {
        const tx = this.db!.transaction(STORE_NAME, 'readonly');
        const store = tx.objectStore(STORE_NAME);
        const req = store.count();
        req.onsuccess = () => resolve(req.result || 0);
        req.onerror = () => resolve(0);
      } catch {
        resolve(0);
      }
    });
  }
}

export const audioCache = new PhonicsIndexedDBCache();
