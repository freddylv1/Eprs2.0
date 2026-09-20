// Service Worker for EPRS English Phonics Matrix System
const CACHE_NAME = 'eprs-phonics-v2';

const STATIC_PRECACHE = [
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  '/icon-maskable-512.png',
  '/apple-touch-icon.png',
  '/data/rules.json',
  '/data/categories.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_PRECACHE).catch((err) => {
        console.warn('PWA Precache non-blocking error:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Never intercept /_next/, Next.js hot reload / webpack chunks, or external origins
  if (url.origin !== self.location.origin || url.pathname.startsWith('/_next/')) {
    return;
  }

  // For static data json files and icons: Stale-While-Revalidate
  if (url.pathname.startsWith('/data/') || url.pathname.endsWith('.png') || url.pathname.endsWith('.json')) {
    event.respondWith(
      caches.open(CACHE_NAME).then(async (cache) => {
        const cachedResponse = await cache.match(event.request);
        const fetchPromise = fetch(event.request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          })
          .catch(() => cachedResponse);

        return cachedResponse || fetchPromise;
      })
    );
    return;
  }

  // For navigations and all other requests: Pass through to network
  // In case of total offline failure for navigation, return basic offline fallback
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(async () => {
        const cached = await caches.match(event.request);
        if (cached) return cached;
        return new Response(
          '<!DOCTYPE html><html><head><meta charset="utf-8"><title>離線模式 - EPRS</title></head><body style="font-family:sans-serif;text-align:center;padding:50px;"><h2>網路連線已中斷</h2><p>請檢查您的網路連線後重新整理網頁。</p></body></html>',
          { headers: { 'Content-Type': 'text/html; charset=utf-8' }, status: 503 }
        );
      })
    );
  }
});

