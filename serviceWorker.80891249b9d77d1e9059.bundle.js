(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ 204:
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
//# sourceMappingURL=serviceWorker.80891249b9d77d1e9059.bundle.js.map