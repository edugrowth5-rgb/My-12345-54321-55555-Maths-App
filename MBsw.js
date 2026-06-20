const CACHE_NAME = "success-zone-v1";
const ASSETS = [
  "index.html",
  "MBstyle.css",
  "MBscript.js",
  "MBdata1.js",
  "MBchapter.js",
  "MBquiz1.js",
  "Gemini_Generated_Image_5m7meu5m7meu5m7m.png"
];

// Install Event
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

// Fetch Event
self.addEventListener("fetch", (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});
