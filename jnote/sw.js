const cacheName = 'cache-v2'
const resourcesToPrecache = [
'index.html',
'inter.woff',
'notepad-left.png',
'notepad-top.png',
'line.png',
'notepad.js',
'manifest.webmanifest'
]
self.addEventListener('install', event => {
  console.log('Install event!')
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        return cache.addAll(resourcesToPrecache)
       })
   )
})
self.addEventListener('activate', event => {
console.log('Installa event!')
})

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request)
    .then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    })
  );
})
