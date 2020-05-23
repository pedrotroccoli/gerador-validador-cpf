(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ 214:
/***/ (function(module, exports) {

if (navigator.serviceWorker.controller) {
  console.info('Active service worker found, no need to register');
} else {
  // Register ServiceWorker
  navigator.serviceWorker.register('service-worker.js', {
    scope: './'
  }).then(function (reg) {
    console.info('Service worker has been registered for scope: ' + reg.scope);
  });
}

/***/ })

}]);
//# sourceMappingURL=serviceWorker.c74734a317b622d860c2.bundle.js.map