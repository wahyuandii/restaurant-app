import 'regenerator-runtime';
import CacheHelper from './utils/cachehelper';

const assetsToCache = [
  './',
  './icons/maskable_icon.png',
  './icons/maskable_icon_x16.png',
  './icons/maskable_icon_x24.png',
  './icons/maskable_icon_x32.png',
  './icons/maskable_icon_x64.png',
  './icons/maskable_icon_x128.png',
  './icons/maskable_icon_x256.png',
  './icons/maskable_icon_x512.png',
  './index.html',
  './sw.bundle.js',
  './app.bundle.js',
  './favicon.png',
  './app.webmanifest',
];

// TODO: Caching App Shell Resource
self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
