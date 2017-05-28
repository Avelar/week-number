importScripts('/js/cache-polyfill.js');

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('week-number').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/manifest.json',
       '/img/icon.png',
       '/css/application.css',
       '/js/application.js',
       '/js/lib/jquery.min.js'
     ]);
   })
 );
});
