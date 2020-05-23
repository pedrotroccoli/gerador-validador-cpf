(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ 213:
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
//# sourceMappingURL=serviceWorker.db6b52a98cb48dce44ac.bundle.js.map