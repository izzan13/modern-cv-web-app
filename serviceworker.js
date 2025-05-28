// serviceworker.js

const CACHE_NAME = "cv-pwa-cache-v1";
const urlsToCache = [
  "index.html",
  "aboutme.html",
  "skills.html",
  "portfolio.html",
  "contact.html",
  "./Style/stylesheet.css",
  "./app.js",
  "./manifest.json",
  "./images/icon-72x72.png",
  "./images/icon-96x96.png",
  "./images/icon-128x128.png",
  "./images/icon-152x152.png",
  "./images/icon-512x512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
