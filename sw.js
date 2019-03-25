importScripts("workbox-v3.6.3/workbox-sw.js");

workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});

workbox.skipWaiting();
workbox.clientsClaim();

self.__precacheManifest = [
  {
    "url": "assets/css/main.css",
    "revision": "5"
  },
  {
    "url": "assets/img/gallery/5.jpg",
    "revision": "5"
  },
  {
    "url": "assets/img/gallery/6.jpg",
    "revision": "5"
  },
  {
    "url": "assets/js/bundle.js",
    "revision": "5"
  },
  {
    "url": "index.html",
    "revision": "5"
  }
].concat(self.__precacheManifest || []);

workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
