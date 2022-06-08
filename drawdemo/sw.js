const cacheName = 'cache-v1.1.1'
const resourcesToPrecache = [
'./index.html',
'./manifest.webmanifest',
'./sw.js',
'./apple.png',
'./icon.png',
'./tabicon.png'
]
self.addEventListener('install', event => {
  console.log('Install event!')
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        return cache.addAll(resourcesToPrecache)
       }))
})
self.addEventListener('activate', event => {
console.log('Installa event!')
})

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request)
    .then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    }).catch(function() {
       return caches.match('./index.html');
       })
  );
})
