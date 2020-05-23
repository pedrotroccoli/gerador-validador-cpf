/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"0":"react~react-ga","4":"serviceWorker"}[chunkId]||chunkId) + "." + {"0":"e5c5c8ff797ca5ddde0f","4":"db6b52a98cb48dce44ac"}[chunkId] + ".bundle.js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([136,2,5,3]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 134:
/***/ (function(module) {

module.exports = JSON.parse("{\"app\":{\"title\":\"Gerador e validador de CPF Open-Source | Tiago Porto\",\"description\":\"Gerador e validador de CPF, open-source JS lib to generate and validate CPF.\",\"keywords\":\"cpf,gerar,gerador,generator,generates,validador,valida,validates,online\"},\"header\":{\"libInfo\":\"JS open-source lib to generate and validate CPF.\",\"projectPageGithub\":\"Github project page\"},\"validate\":{\"title\":\"Validate\",\"insertCPF\":\"Insert CPF\"},\"generate\":{\"title\":\"Generate\",\"cpfGenerated\":\"Generated CPF\"},\"info\":{\"algorithm\":\"Implements the follow <0>algorithm</0>.\",\"disclaimer\":\"Lib available to assist developers in software testing, doesn't have link with \\\"Receita Federal do Brasil\\\".\",\"cpfByState\":\"The last digit before verifiers (last 2 digits), corresponds with the brasilian state were CPF was issued.\",\"codeByState\":\"Code by brasilian states:\",\"example\":\"Example: CPF <0>XXX.XXX.XX8-XX</0>, number 8 corresponds to São Paulo state.\",\"stateCode1\":\"1. Distrito Federal, Goiás, Mato Grosso do Sul and Tocantins;\",\"stateCode2\":\"2. Pará, Amazonas, Acre, Amapá, Rondônia and Roraima;\",\"stateCode3\":\"3. Ceará, Maranhão and Piauí;\",\"stateCode4\":\"4. Pernambuco, Rio Grande do Norte, Paraíba and Alagoas;\",\"stateCode5\":\"5. Bahia and Sergipe;\",\"stateCode6\":\"6. Minas Gerais;\",\"stateCode7\":\"7. Rio de Janeiro and Espírito Santo;\",\"stateCode8\":\"8. São Paulo;\",\"stateCode9\":\"9. Paraná and Santa Catarina;\",\"stateCode10\":\"0. Rio Grande do Sul.\",\"disclaimerValidCPF\":\"Valid CPD doesn't mean is registered or is active. For those informations, check <0>Secretaria da Receita Federal do Brasil</0>.\"},\"donate\":{\"leaveStar\":\"Leave a ★\",\"contributePaypal\":\"Contribute (Paypal)\",\"contributeBitcoin\":\"Contribute (bitcoin)\"},\"messages\":{\"copied\":\"Copied!\",\"cpfCopied\":\"CPF Copied!\",\"validCPF\":\"CPF Valid\",\"invalidCPF\":\"CPF Invalid\",\"walletCopied\":\"Wallet copied!\",\"incomplete\":\"incomplete\"}}");

/***/ }),

/***/ 135:
/***/ (function(module) {

module.exports = JSON.parse("{\"app\":{\"title\":\"Gerador e validador de CPF Open-Source | Tiago Porto\",\"description\":\"Gerador e validador de CPF, biblioteca JS open-source para gerar e validar CPF.\",\"keywords\":\"cpf,gerar,gerador,generator,generates,validador,valida,validates,online\"},\"header\":{\"libInfo\":\"Lib JS open-source para gerar e validar CPF.\",\"projectPageGithub\":\"Página do projeto no github\"},\"validate\":{\"title\":\"Validar\",\"insertCPF\":\"Insira o CPF\"},\"generate\":{\"title\":\"Gerar\",\"cpfGenerated\":\"CPF gerado\"},\"info\":{\"algorithm\":\"Utiliza o seguinte <0>algoritmo</0>.\",\"disclaimer\":\"Lib disponível para auxiliar desenvolvedores em testes de software, não possui qualquer vínculo com a Receita Federal do Brasil.\",\"cpfByState\":\"O CPF guarda o estado brasileiro de onde foi emitido, esse número corresponde ao último algarismo anterior aos dois dígitos verificadores.\",\"codeByState\":\"Códigos correspondentes aos estados brasileiros:\",\"example\":\"Exemplo: CPF <0>XXX.XXX.XX8-XX</0>, o número 8 corresponde ao estado de São Paulo.\",\"stateCode1\":\"1. Distrito Federal, Goiás, Mato Grosso do Sul e Tocantins;\",\"stateCode2\":\"2. Pará, Amazonas, Acre, Amapá, Rondônia e Roraima;\",\"stateCode3\":\"3. Ceará, Maranhão e Piauí;\",\"stateCode4\":\"4. Pernambuco, Rio Grande do Norte, Paraíba e Alagoas;\",\"stateCode5\":\"5. Bahia e Sergipe;\",\"stateCode6\":\"6. Minas Gerais;\",\"stateCode7\":\"7. Rio de Janeiro e Espírito Santo;\",\"stateCode8\":\"8. São Paulo;\",\"stateCode9\":\"9. Paraná e Santa Catarina;\",\"stateCode10\":\"0. Rio Grande do Sul.\",\"disclaimerValidCPF\":\"Um CPF válido não significa que ele exista no Cadastro Nacional de Pessoas Físicas, nem que esteja ativo ou com situação cadastral regular. Para conferir tais dados, consulte o site oficial da <0>Secretaria da Receita Federal do Brasil</0>.\"},\"donate\":{\"leaveStar\":\"Deixe um ★\",\"contributePaypal\":\"Contribua pelo Paypal\",\"contributeBitcoin\":\"Contribua por bitcoin\"},\"messages\":{\"copied\":\"Copiado!\",\"cpfCopied\":\"CPF copiado!\",\"validCPF\":\"CPF Válido\",\"invalidCPF\":\"CPF Inválido\",\"walletCopied\":\"Wallet copiado!\",\"incomplete\":\"incompleto\"}}");

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(137);
__webpack_require__(145);
__webpack_require__(146);
__webpack_require__(151);
module.exports = __webpack_require__(207);


/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(65);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(66);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.search.js
var es_string_search = __webpack_require__(115);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(1);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(33);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/normalize.css/normalize.css
var normalize = __webpack_require__(166);

// EXTERNAL MODULE: ./src/site/styles/demo.styl
var demo = __webpack_require__(167);

// CONCATENATED MODULE: ./src/site/styles/index.js


// CONCATENATED MODULE: ./src/site/Toast.module.styl
// extracted by mini-css-extract-plugin
/* harmony default export */ var Toast_module = ({"toast":"toast--3vRA4hu","toastContent":"toast-content--1TBn8vN"});
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/react-toastify.esm.js + 3 modules
var react_toastify_esm = __webpack_require__(32);

// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(168);

// CONCATENATED MODULE: ./src/site/components/Header/Header.module.styl
// extracted by mini-css-extract-plugin
/* harmony default export */ var Header_module = ({"panel":"panel--1HNHb_e","panelTitle":"panel__title--2wAkOiT","logo":"logo--27T40Mb","copy":"copy--3P7Bv5h"});
// EXTERNAL MODULE: ./node_modules/react-github-corner/lib/GithubCorner.js
var GithubCorner = __webpack_require__(127);
var GithubCorner_default = /*#__PURE__*/__webpack_require__.n(GithubCorner);

// EXTERNAL MODULE: ./node_modules/react-copy-to-clipboard/lib/index.js
var lib = __webpack_require__(43);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ./src/site/locales/resources.json
var resources = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/useTranslation.js
var useTranslation = __webpack_require__(211);

// CONCATENATED MODULE: ./src/site/components/Donate/Donation.module.styl
// extracted by mini-css-extract-plugin
/* harmony default export */ var Donation_module = ({"list":"list--3dGQzUh","blur":"blur--1Z8MrmJ","button":"button--3qYeyKj","buttonStar":"button--star--3PmOUDi","buttonPaypal":"button--paypal--1Av3ORy","buttonBitcoin":"button--bitcoin--1hkUDoY","buttonLitcoin":"button--litcoin--2NG1HbN"});
// CONCATENATED MODULE: ./src/site/components/Donate/Code.module.styl
// extracted by mini-css-extract-plugin
/* harmony default export */ var Code_module = ({"codeBox":"code-box--1x5_tjX","code":"code--1roPB0y","showCode":"show-code--2BJuFjg","showQr":"showQR--7m-bmcu","hideCode":"hide-code--2VVdR7l","hideQr":"hideQR--2i9MlXn"});
// CONCATENATED MODULE: ./src/site/components/Donate/img/BTCQR.png
/* harmony default export */ var BTCQR = (__webpack_require__.p + "img/96860fdd2f001e8edad5e0bdc5f71b7c.png");
// CONCATENATED MODULE: ./src/site/components/Donate/Donate.tsx










var Donate_Donate = function Donate() {
  var _useTranslation = Object(useTranslation["a" /* useTranslation */])(),
      t = _useTranslation.t;

  var _useState = Object(react["useState"])(false),
      isCodeVisible = _useState[0],
      setIsCodeVisible = _useState[1];

  var trackClick = function trackClick(_ref) {
    var category = _ref.category,
        type = _ref.type;
    return function () {
      if (true) {
        __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 214)).then(function (ReactGA) {
          ReactGA.ga('send', 'event', category, 'click', type);
        });
      }
    };
  };

  var handleCopy = function handleCopy() {
    Object(react_toastify_esm["b" /* toast */])(t(resources.messages.walletCopied));
  };

  var toggleCodeVisibility = function toggleCodeVisibility() {
    setIsCodeVisible(!isCodeVisible);
  };

  var handleClick = function handleClick(trackInfo) {
    return function () {
      trackClick(trackInfo)();
      toggleCodeVisibility();
    };
  };

  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "donation"
  }, /*#__PURE__*/react_default.a.createElement("ul", {
    className: Donation_module.list + " " + (isCodeVisible ? Donation_module.blur : '')
  }, /*#__PURE__*/react_default.a.createElement("li", null, /*#__PURE__*/react_default.a.createElement("a", {
    className: Donation_module.button + " " + Donation_module.buttonStar,
    onClick: trackClick({
      category: 'Star',
      type: 'generate-validade-cpf'
    }),
    "aria-label": t(resources.donate.leaveStar),
    "data-footnote": t(resources.donate.leaveStar),
    href: "https://github.com/tiagoporto/gerador-validador-cpf/stargazers",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/react_default.a.createElement("svg", {
    width: "14",
    height: "16",
    viewBox: "0 0 14 16",
    version: "1.1"
  }, /*#__PURE__*/react_default.a.createElement("path", {
    d: "M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
  })))), /*#__PURE__*/react_default.a.createElement("li", null, /*#__PURE__*/react_default.a.createElement("a", {
    className: Donation_module.button + " " + Donation_module.buttonPaypal,
    onClick: trackClick({
      category: 'Donate',
      type: 'Paypal generate-validade-cpf'
    }),
    "aria-label": t(resources.donate.contributePaypal),
    "data-footnote": t(resources.donate.contributePaypal),
    href: "https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=YTDUQ8RZ2G4Q8&lc=BR&item_name=tiagoporto&item_number=geradorcpf&currency_code=BRL&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "PayPal")), /*#__PURE__*/react_default.a.createElement("li", null, /*#__PURE__*/react_default.a.createElement(lib_default.a, {
    text: "3DztnDvY7McQ7zwGS8Vjafsbc1ee1HDAmE",
    onCopy: handleCopy
  }, /*#__PURE__*/react_default.a.createElement("button", {
    className: Donation_module.button + " " + Donation_module.buttonBitcoin,
    onClick: handleClick({
      category: 'Donate',
      type: 'Bitcoin generate-validate-cpf'
    }),
    "aria-label": t(resources.donate.contributeBitcoin),
    "data-footnote": t(resources.donate.contributeBitcoin)
  }, "Bitcoin")))), /*#__PURE__*/react_default.a.createElement("div", {
    className: Code_module.codeBox,
    style: {
      display: isCodeVisible ? 'block' : 'none'
    }
  }, /*#__PURE__*/react_default.a.createElement("img", {
    src: BTCQR,
    onClick: toggleCodeVisibility,
    className: Code_module.code + " " + (isCodeVisible ? Code_module.showCode : Code_module.hideCode)
  })));
};
// CONCATENATED MODULE: ./src/site/components/Donate/index.ts

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(67);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(84);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(119);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.timers.js
var web_timers = __webpack_require__(182);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url.js
var web_url = __webpack_require__(183);

// EXTERNAL MODULE: ./node_modules/i18next/dist/esm/i18next.js + 21 modules
var i18next = __webpack_require__(45);

// CONCATENATED MODULE: ./src/site/components/ChangeLocale/ChangeLocale.module.styl
// extracted by mini-css-extract-plugin
/* harmony default export */ var ChangeLocale_module = ({"box":"box--2rVpaQ2","button":"button--3ADAAs1","selected":"selected--3Rfza_N"});
// CONCATENATED MODULE: ./src/site/components/ChangeLocale/ChangeLocale.tsx











var ChangeLocale_ChangeLocale = function ChangeLocale() {
  var handleLocale = function handleLocale(locale, callback) {
    return function () {
      i18next["a" /* default */].changeLanguage(locale);
      window.history.replaceState({}, 'Gerador e Validador de CPF', "?lang=" + locale);
      callback && setTimeout(callback, 5);
    };
  };

  var _useState = Object(react["useState"])(''),
      locale = _useState[0],
      setLocale = _useState[1];

  var _useState2 = Object(react["useState"])(true),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  Object(react["useEffect"])(function () {
    setLocale(i18next["a" /* default */].language);
  }, [i18next["a" /* default */].language]);
  Object(react["useEffect"])(function () {
    var searchParams = new URLSearchParams(window.location.search);
    var lang = searchParams.get('lang');

    if (lang) {
      handleLocale(lang, function () {
        return setIsLoading(false);
      })();
    } else {
      setIsLoading(false);
    }
  }, []);
  return isLoading ? null : /*#__PURE__*/react_default.a.createElement("div", {
    className: ChangeLocale_module.box
  }, /*#__PURE__*/react_default.a.createElement("button", {
    className: ChangeLocale_module.button + " " + (locale === 'br' ? ChangeLocale_module.selected : ''),
    onClick: handleLocale('br')
  }, "pt-br"), ' ', "|", ' ', /*#__PURE__*/react_default.a.createElement("button", {
    className: ChangeLocale_module.button + " " + (locale === 'en' ? ChangeLocale_module.selected : ''),
    onClick: handleLocale('en')
  }, "en"));
};
// CONCATENATED MODULE: ./src/site/components/ChangeLocale/index.ts

// EXTERNAL MODULE: ./node_modules/highlight.js/styles/github.css
var github = __webpack_require__(187);

// CONCATENATED MODULE: ./src/site/components/Header/Header.tsx










var Header_Header = function Header() {
  var _useTranslation = Object(useTranslation["a" /* useTranslation */])(),
      t = _useTranslation.t;

  var handleCopy = function handleCopy() {
    Object(react_toastify_esm["b" /* toast */])(t(resources.messages.copied));
  };

  return /*#__PURE__*/react_default.a.createElement("header", {
    className: Header_module.panel
  }, /*#__PURE__*/react_default.a.createElement(ChangeLocale_ChangeLocale, null), /*#__PURE__*/react_default.a.createElement(GithubCorner_default.a, {
    href: "https://github.com/tiagoporto/gerador-validador-cpf/",
    size: 80,
    bannerColor: "#fff",
    octoColor: "#155078",
    ariaLabel: t(resources.header.projectPageGithub)
  }), /*#__PURE__*/react_default.a.createElement("h1", {
    className: Header_module.panelTitle
  }, /*#__PURE__*/react_default.a.createElement("span", null, "Gerador e"), " validador de CPF"), /*#__PURE__*/react_default.a.createElement("p", null, t(resources.header.libInfo)), /*#__PURE__*/react_default.a.createElement(lib_default.a, {
    text: "npm install gerador-validador-cpf --save",
    onCopy: handleCopy
  }, /*#__PURE__*/react_default.a.createElement("pre", {
    className: Header_module.copy
  }, /*#__PURE__*/react_default.a.createElement("code", {
    className: "hljs"
  }, "npm install gerador-validador-cpf --save-dev"))), /*#__PURE__*/react_default.a.createElement(Donate_Donate, null));
};
// CONCATENATED MODULE: ./src/site/components/Header/index.ts

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.date.to-string.js
var es_date_to_string = __webpack_require__(188);

// CONCATENATED MODULE: ./src/site/components/Footer/Footer.module.styl
// extracted by mini-css-extract-plugin
/* harmony default export */ var Footer_module = ({"footer":"footer--14aFLiE"});
// CONCATENATED MODULE: ./src/site/components/Footer/Footer.tsx



var Footer_Footer = function Footer() {
  var date = new Date();
  return /*#__PURE__*/react_default.a.createElement("footer", {
    className: Footer_module.footer
  }, /*#__PURE__*/react_default.a.createElement("p", null, "\xA9 2014-", date.getFullYear(), " | Tiago Porto"));
};
// CONCATENATED MODULE: ./src/site/components/Footer/index.ts

// CONCATENATED MODULE: ./src/site/components/GenerateSection/GenerateSection.module.styl
// extracted by mini-css-extract-plugin
/* harmony default export */ var GenerateSection_module = ({"generateButton":"generate-button--3oSqR_N","generateSection":"generate-section--NMs0op5","input":"input--3CwSxb4","center":"center--1YtIKfX"});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(189);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(191);

// CONCATENATED MODULE: ./src/lib/calcChecker.ts

var calcFirstChecker = function calcFirstChecker(firstNineDigits) {
  var sum = 0;

  for (var j = 0; j < 9; ++j) {
    sum += Number(firstNineDigits.charAt(j)) * (10 - j);
  }

  var lastSumChecker = sum % 11;
  var firstChecker = lastSumChecker < 2 ? 0 : 11 - lastSumChecker;
  return firstChecker;
};
var calcSecondChecker = function calcSecondChecker(cpfWithChecker1) {
  var sum = 0;

  for (var k = 0; k < 10; ++k) {
    sum += Number(cpfWithChecker1.charAt(k)) * (11 - k);
  }

  var lastSumChecker2 = sum % 11;
  var checker2 = lastSumChecker2 < 2 ? 0 : 11 - lastSumChecker2;
  return checker2;
};
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__(194);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(196);

// CONCATENATED MODULE: ./src/lib/utils.ts


var generateFirstDigits = function generateFirstDigits() {
  var digits = '';

  for (var i = 0; i < 9; ++i) {
    digits += String(Math.floor(Math.random() * 10));
  }

  return digits;
};
var hasCPFLength = function hasCPFLength(cpf) {
  if (cpf.length > 11) {
    console.error('CPF number has more than 11 digits.');
    return false;
  } else if (cpf.length < 11) {
    console.error('CPF number has fewer than 11 digits.');
    return false;
  }

  return true;
}; // format option
// true   return 000.000.000-00
// false  return 00000000000

var formatCPF = function formatCPF(cpf, format) {
  var digitsSeparator = '';
  var checkersSeparator = '';

  if (format) {
    digitsSeparator = '.';
    checkersSeparator = '-';
  }

  return cpf.slice(0, 3) + digitsSeparator + cpf.slice(3, 6) + digitsSeparator + cpf.slice(6, 9) + checkersSeparator + cpf.slice(9, 11);
};
var allDigitsAreEqual = function allDigitsAreEqual(digits) {
  for (var i = 0; i < 10; i++) {
    if (digits === Array(digits.length + 1).join(String(i))) {
      return true;
    }
  }

  return false;
};
// CONCATENATED MODULE: ./src/lib/CPF.ts




/**
 * [Gerador e Validador de CPF](https://tiagoporto.github.io/gerador-validador-cpf)
 * @author Tiago Porto
 *
 * @function Generate
 * @param  {string} [formatOption="default"] - 'digits' | 'checker' | 'default'
 *
 * @returns {string}                  Valid and formatted CPF
 */

var CPF_generate = function generate(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      format = _ref.format;

  var firstNineDigits = '';

  do {
    firstNineDigits = generateFirstDigits();
  } while (allDigitsAreEqual(firstNineDigits));

  var firstChecker = calcFirstChecker(firstNineDigits);
  var secondChecker = calcSecondChecker(firstNineDigits + firstChecker);
  var generatedCPF = "" + firstNineDigits + firstChecker + secondChecker;
  return formatCPF(generatedCPF, format);
};
/**
 *
 * [Gerador e Validador de CPF](https://tiagoporto.github.io/gerador-validador-cpf)
 * @author Tiago Porto
 *
 * @function Validate
 * @param  {string} value  CPF number
 *
 * @returns {boolean}                true = valid || false = invalid
 */

var CPF_validate = function validate(value) {
  if (typeof value !== 'string') {
    return false;
  }

  var cleanCPF = String(value).replace(/\.|-|\s/g, '');
  var firstNineDigits = cleanCPF.substring(0, 9);
  var checker = cleanCPF.substring(9, 11);

  if (!hasCPFLength(cleanCPF) || allDigitsAreEqual(cleanCPF)) {
    return false;
  }

  var checker1 = calcFirstChecker(firstNineDigits);
  var checker2 = calcSecondChecker("" + firstNineDigits + checker1);
  return checker === "" + checker1 + checker2;
};
// EXTERNAL MODULE: ./node_modules/react-imask/esm/index.js + 2 modules
var esm = __webpack_require__(69);

// CONCATENATED MODULE: ./src/site/components/GenerateSection/GenerateSection.tsx








 // @ts-expect-error


var GenerateSection_GenerateSection = function GenerateSection() {
  var _useState = Object(react["useState"])(''),
      cpf = _useState[0],
      setCpf = _useState[1];

  var _useTranslation = Object(useTranslation["a" /* useTranslation */])(),
      t = _useTranslation.t;

  var handleCopy = function handleCopy() {
    Object(react_toastify_esm["b" /* toast */])(t(resources.messages.cpfCopied));
  };

  var generateNewCPF = function generateNewCPF(type) {
    return function () {
      setCpf(CPF_generate());

      if (true) {
        __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 214)).then(function (ReactGA) {
          ReactGA.ga('send', 'event', 'Generate', type, 'Generate CPF');
        });
      }
    };
  };

  Object(react["useEffect"])(function () {
    generateNewCPF('load')();
  }, []);
  return /*#__PURE__*/react_default.a.createElement("section", {
    className: GenerateSection_module.generateSection
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: GenerateSection_module.center
  }, /*#__PURE__*/react_default.a.createElement("h2", null, t(resources.generate.title)), /*#__PURE__*/react_default.a.createElement(lib_default.a, {
    text: cpf,
    onCopy: handleCopy
  }, /*#__PURE__*/react_default.a.createElement(esm["a" /* IMaskInput */], {
    "aria-label": t(resources.generate.cpfGenerated),
    value: cpf,
    className: GenerateSection_module.input,
    type: "text",
    mask: '000.000.000-00',
    readOnly: true
  })), /*#__PURE__*/react_default.a.createElement("button", {
    onClick: generateNewCPF('click'),
    className: GenerateSection_module.generateButton,
    type: "button"
  }, t(resources.generate.title))));
};
// CONCATENATED MODULE: ./src/site/components/GenerateSection/index.ts

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(197);

// CONCATENATED MODULE: ./src/site/components/ValidateSection/ValidateSection.module.styl
// extracted by mini-css-extract-plugin
/* harmony default export */ var ValidateSection_module = ({"validateSection":"validate-section--RtQw291","center":"center--3_53CsW","validateSectionInput":"validate-section__input--3EF65fg","message":"message--350Oqsc","messageValid":"message--valid--UdKXcBU","messageInvalid":"message--invalid--jTuaWyv"});
// CONCATENATED MODULE: ./src/site/components/ValidateSection/ValidateSection.tsx





 // @ts-expect-error




var ValidateSection_ValidateSection = function ValidateSection() {
  var _useTranslation = Object(useTranslation["a" /* useTranslation */])(),
      t = _useTranslation.t;

  var _useState = Object(react["useState"])({
    tempCpf: '',
    cpf: '',
    isValid: false,
    message: ''
  }),
      validation = _useState[0],
      setValidation = _useState[1];

  var cpf = validation.cpf,
      isValid = validation.isValid,
      message = validation.message,
      tempCpf = validation.tempCpf;

  var handleChangeCPF = function handleChangeCPF(cpf) {
    setValidation(Object.assign(Object.assign({}, validation), {}, {
      tempCpf: cpf
    }));
  };

  Object(react["useEffect"])(function () {
    if (tempCpf.length === 14) {
      if (true) {
        __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 214)).then(function (ReactGA) {
          ReactGA.ga('send', 'event', 'Validate', 'type', 'Validate CPF');
        });
      }

      var _isValid = CPF_validate(tempCpf);

      setValidation(Object.assign(Object.assign({}, validation), {}, {
        cpf: tempCpf,
        isValid: _isValid,
        message: _isValid ? t(resources.messages.validCPF) : t(resources.messages.invalidCPF)
      }));
    } else {
      setValidation(Object.assign(Object.assign({}, validation), {}, {
        cpf: '',
        message: tempCpf ? t(resources.messages.incomplete) : ''
      }));
    }
  }, [tempCpf]);
  return /*#__PURE__*/react_default.a.createElement("section", {
    className: ValidateSection_module.validateSection
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: ValidateSection_module.center
  }, /*#__PURE__*/react_default.a.createElement("h2", null, t(resources.validate.title)), /*#__PURE__*/react_default.a.createElement(esm["a" /* IMaskInput */], {
    "aria-label": t(resources.validate.insertCPF),
    value: tempCpf,
    placeholder: t(resources.validate.insertCPF),
    onAccept: handleChangeCPF,
    className: ValidateSection_module.validateSectionInput,
    type: "text",
    mask: '000.000.000-00',
    required: true
  }), /*#__PURE__*/react_default.a.createElement("div", {
    className: ValidateSection_module.validateSectionInput + " " + ValidateSection_module.message + " " + (isValid && cpf ? ValidateSection_module.messageValid : '') + " " + (!isValid && cpf ? ValidateSection_module.messageInvalid : '')
  }, message || '...')));
};
// CONCATENATED MODULE: ./src/site/components/ValidateSection/index.ts

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__(198);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(199);

// CONCATENATED MODULE: ./src/site/components/InfoSection/InfoSection.module.styl
// extracted by mini-css-extract-plugin
/* harmony default export */ var InfoSection_module = ({"center":"center--9YruStl","infoSection":"info-section--2IT9UOu","list":"list--3BA1q8Y"});
// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/Trans.js
var Trans = __webpack_require__(212);

// CONCATENATED MODULE: ./src/site/components/InfoSection/InfoSection.tsx










var InfoSection_InfoSection = function InfoSection() {
  var _useTranslation = Object(useTranslation["a" /* useTranslation */])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react_default.a.createElement("section", {
    className: InfoSection_module.infoSection
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: InfoSection_module.center
  }, /*#__PURE__*/react_default.a.createElement("p", null, t(resources.info.disclaimer)), /*#__PURE__*/react_default.a.createElement(Trans["a" /* Trans */], {
    i18nKey: resources.info.algorithm,
    components: [/*#__PURE__*/react_default.a.createElement("a", {
      key: "link",
      href: "http://www.geradorcpf.com/algoritmo_do_cpf.htm"
    })]
  }), /*#__PURE__*/react_default.a.createElement("p", null, /*#__PURE__*/react_default.a.createElement(Trans["a" /* Trans */], {
    i18nKey: resources.info.disclaimerValidCPF,
    components: [/*#__PURE__*/react_default.a.createElement("a", {
      key: "link",
      href: "http://www.receita.fazenda.gov.br/aplicacoes/atcta/cpf/consultapublica.asp"
    })]
  })), /*#__PURE__*/react_default.a.createElement("p", null, t(resources.info.cpfByState)), /*#__PURE__*/react_default.a.createElement("blockquote", null, /*#__PURE__*/react_default.a.createElement(Trans["a" /* Trans */], {
    i18nKey: resources.info.example,
    components: [/*#__PURE__*/react_default.a.createElement("strong", {
      key: "strong"
    })]
  })), /*#__PURE__*/react_default.a.createElement("p", null, t(resources.info.codeByState)), /*#__PURE__*/react_default.a.createElement("ol", {
    className: InfoSection_module.list
  }, Array.from(Array(10).keys()).map(function (i) {
    return /*#__PURE__*/react_default.a.createElement("li", {
      key: "item" + i
    }, t(resources.info["stateCode" + (i + 1)]));
  }))));
};
// CONCATENATED MODULE: ./src/site/components/InfoSection/index.ts

// CONCATENATED MODULE: ./src/site/components/Main/Main.tsx




var Main_Main = function Main() {
  return /*#__PURE__*/react_default.a.createElement("main", null, /*#__PURE__*/react_default.a.createElement(GenerateSection_GenerateSection, null), /*#__PURE__*/react_default.a.createElement(ValidateSection_ValidateSection, null), /*#__PURE__*/react_default.a.createElement(InfoSection_InfoSection, null));
};
// CONCATENATED MODULE: ./src/site/components/Main/index.ts

// CONCATENATED MODULE: ./src/site/App.tsx








var App_App = function App() {
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(react["StrictMode"], null, /*#__PURE__*/react_default.a.createElement(Header_Header, null), /*#__PURE__*/react_default.a.createElement(Main_Main, null), /*#__PURE__*/react_default.a.createElement(Footer_Footer, null)), /*#__PURE__*/react_default.a.createElement(react_toastify_esm["a" /* ToastContainer */], {
    className: Toast_module.toast,
    toastClassName: Toast_module.toastContent,
    position: "bottom-center",
    autoClose: 2500,
    hideProgressBar: true,
    newestOnTop: true,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: false,
    draggable: false,
    pauseOnHover: false
  }));
};
// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/context.js
var context = __webpack_require__(25);

// EXTERNAL MODULE: ./src/site/locales/en/app.json
var app = __webpack_require__(134);

// EXTERNAL MODULE: ./src/site/locales/br/app.json
var br_app = __webpack_require__(135);

// CONCATENATED MODULE: ./src/site/locales/index.ts


var i18nResources = {
  en: app,
  br: br_app
};
// CONCATENATED MODULE: ./src/site/index.tsx











if (true) {
  __webpack_require__.e(/* import() | react-ga */ 0).then(__webpack_require__.bind(null, 214)).then(function (ReactGA) {
    ReactGA.initialize('UA-32351360-4');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }); // @ts-expect-error

  __webpack_require__.e(/* import() | serviceWorker */ 4).then(__webpack_require__.t.bind(null, 213, 7));
}

i18next["a" /* default */].use(context["e" /* initReactI18next */]).init({
  resources: {
    en: {
      translation: i18nResources.en
    },
    br: {
      translation: i18nResources.br
    }
  },
  lng: 'br',
  fallbackLng: 'br'
});
react_dom_default.a.render( /*#__PURE__*/react_default.a.createElement(App_App, null), document.getElementById('root'));

if (false) {}

/***/ }),

/***/ 6:
/***/ (function(module) {

module.exports = JSON.parse("{\"app\":{\"title\":\"app.title\",\"description\":\"app.description\",\"keywords\":\"app.keywords\"},\"header\":{\"libInfo\":\"header.libInfo\",\"projectPageGithub\":\"header.projectPageGithub\"},\"validate\":{\"title\":\"validate.title\",\"insertCPF\":\"validate.insertCPF\"},\"generate\":{\"title\":\"generate.title\",\"cpfGenerated\":\"generate.cpfGenerated\"},\"info\":{\"algorithm\":\"info.algorithm\",\"disclaimer\":\"info.disclaimer\",\"cpfByState\":\"info.cpfByState\",\"codeByState\":\"info.codeByState\",\"example\":\"info.example\",\"stateCode1\":\"info.stateCode1\",\"stateCode2\":\"info.stateCode2\",\"stateCode3\":\"info.stateCode3\",\"stateCode4\":\"info.stateCode4\",\"stateCode5\":\"info.stateCode5\",\"stateCode6\":\"info.stateCode6\",\"stateCode7\":\"info.stateCode7\",\"stateCode8\":\"info.stateCode8\",\"stateCode9\":\"info.stateCode9\",\"stateCode10\":\"info.stateCode10\",\"disclaimerValidCPF\":\"info.disclaimerValidCPF\"},\"donate\":{\"leaveStar\":\"donate.leaveStar\",\"contributePaypal\":\"donate.contributePaypal\",\"contributeBitcoin\":\"donate.contributeBitcoin\"},\"messages\":{\"copied\":\"messages.copied\",\"cpfCopied\":\"messages.cpfCopied\",\"validCPF\":\"messages.validCPF\",\"invalidCPF\":\"messages.invalidCPF\",\"walletCopied\":\"messages.walletCopied\",\"incomplete\":\"messages.incomplete\"}}");

/***/ })

/******/ });
//# sourceMappingURL=index.4face62b7bb3c236d9dc.js.map