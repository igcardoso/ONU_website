const staticDevCoffee = "dev-coffee-site-v1";
const assets = [
  "/",
  "/index.html",
  //"/css/style.css",
  //"/js/app.js",
  "/media/logo.png",
  "/media/banner.png",
  "/media/banner_2.png",
  "/media/banner_3.png",
  "/media/banner_4.png",
  "/media/img_about_01.png",
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});