/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 155:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(1539);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(8674);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(4916);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.search.js
var es_string_search = __webpack_require__(4765);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(5666);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./src/site/Toast.module.styl
// extracted by mini-css-extract-plugin
/* harmony default export */ var Toast_module = ({"toast":"toast--3Gji9oN","toastContent":"toast-content--2R_Y-Ph"});
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/react-toastify.esm.js + 3 modules
var react_toastify_esm = __webpack_require__(4723);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(7905);
;// CONCATENATED MODULE: ./src/site/components/Header/Header.module.styl
// extracted by mini-css-extract-plugin
/* harmony default export */ var Header_module = ({"panel":"panel--qvV_xvU","panelTitle":"panel__title--3IfY_S4","logo":"logo--Kir6DAr","copy":"copy--3xXo5Ht"});
// EXTERNAL MODULE: ./node_modules/react-github-corner/lib/GithubCorner.js
var GithubCorner = __webpack_require__(7792);
// EXTERNAL MODULE: ./node_modules/react-copy-to-clipboard/lib/index.js
var lib = __webpack_require__(4855);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
;// CONCATENATED MODULE: ./src/site/locales/en/app.json
var app_namespaceObject = JSON.parse("{\"Fs\":{\"k\":\"header.libInfo\",\"E\":\"header.projectPageGithub\"},\"Gu\":{\"T\":\"validate.title\",\"x\":\"validate.insertCPF\"},\"R_\":{\"T\":\"generate.title\",\"h\":\"generate.cpfGenerated\"},\"um\":{\"algorithm\":\"info.algorithm\",\"disclaimer\":\"info.disclaimer\",\"cpfByState\":\"info.cpfByState\",\"codeByState\":\"info.codeByState\",\"example\":\"info.example\",\"stateCode1\":\"info.stateCode1\",\"stateCode2\":\"info.stateCode2\",\"stateCode3\":\"info.stateCode3\",\"stateCode4\":\"info.stateCode4\",\"stateCode5\":\"info.stateCode5\",\"stateCode6\":\"info.stateCode6\",\"stateCode7\":\"info.stateCode7\",\"stateCode8\":\"info.stateCode8\",\"stateCode9\":\"info.stateCode9\",\"stateCode10\":\"info.stateCode10\",\"disclaimerValidCPF\":\"info.disclaimerValidCPF\"},\"HC\":{\"qN\":\"donate.leaveStar\",\"zP\":\"donate.contributePaypal\",\"yu\":\"donate.contributeBitcoin\"},\"sY\":{\"Rp\":\"messages.copied\",\"uN\":\"messages.cpfCopied\",\"$n\":\"messages.validCPF\",\"tO\":\"messages.invalidCPF\",\"d1\":\"messages.walletCopied\",\"uq\":\"messages.incomplete\"}}");
// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/useTranslation.js
var useTranslation = __webpack_require__(6793);
;// CONCATENATED MODULE: ./src/site/components/Donate/Donation.module.styl
// extracted by mini-css-extract-plugin
/* harmony default export */ var Donation_module = ({"list":"list--q3vhwxo","blur":"blur--2hCDn0F","button":"button--3NtVoKR","buttonStar":"button--star--17ZsJ1Z","buttonPaypal":"button--paypal--3qp7VUN","buttonBitcoin":"button--bitcoin--zLRkDI8","buttonLitcoin":"button--litcoin--242rfYn"});
;// CONCATENATED MODULE: ./src/site/components/Donate/Code.module.styl
// extracted by mini-css-extract-plugin
/* harmony default export */ var Code_module = ({"codeBox":"code-box--3pp3UpC","code":"code--2V3htTU","showCode":"show-code--h8rLeRE","showQr":"showQR--FHOyEUC","hideCode":"hide-code--2YzTrCl","hideQr":"hideQR--nf4oXS9"});
;// CONCATENATED MODULE: ./src/site/components/Donate/img/BTCQR.png
/* harmony default export */ var BTCQR = (__webpack_require__.p + "img/8dc8709c5ac9f02634a3a49ff8f1e85f.png");
;// CONCATENATED MODULE: ./src/site/components/Donate/Donate.tsx






function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }









var Donate = function Donate() {
  var _useTranslation = (0,useTranslation/* useTranslation */.$)(),
      t = _useTranslation.t;

  var _useState = (0,react.useState)(false),
      isCodeVisible = _useState[0],
      setIsCodeVisible = _useState[1];

  var trackClick = function trackClick(_ref) {
    var category = _ref.category,
        type = _ref.type;
    return function () {
      if (true) {
        ;

        _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var ReactGA;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return __webpack_require__.e(/* import() */ 516).then(__webpack_require__.bind(__webpack_require__, 1516));

                case 2:
                  ReactGA = _context.sent;
                  ReactGA.ga('send', 'event', category, 'click', type);

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }))();
      }
    };
  };

  var handleCopy = function handleCopy() {
    (0,react_toastify_esm/* toast */.Am)(t(app_namespaceObject.sY.d1));
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

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "donation",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("ul", {
      className: Donation_module.list + " " + (isCodeVisible ? Donation_module.blur : ''),
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("li", {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
          className: Donation_module.button + " " + Donation_module.buttonStar,
          onClick: trackClick({
            category: 'Star',
            type: 'generate-validade-cpf'
          }),
          "aria-label": t(app_namespaceObject.HC.qN),
          "data-footnote": t(app_namespaceObject.HC.qN),
          href: "https://github.com/tiagoporto/gerador-validador-cpf/stargazers",
          target: "_blank",
          rel: "noopener noreferrer",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("svg", {
            width: "14",
            height: "16",
            viewBox: "0 0 14 16",
            version: "1.1",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
            })
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
          className: Donation_module.button + " " + Donation_module.buttonPaypal,
          onClick: trackClick({
            category: 'Donate',
            type: 'Paypal generate-validade-cpf'
          }),
          "aria-label": t(app_namespaceObject.HC.zP),
          "data-footnote": t(app_namespaceObject.HC.zP),
          href: "https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=YTDUQ8RZ2G4Q8&lc=BR&item_name=tiagoporto&item_number=geradorcpf&currency_code=BRL&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted",
          target: "_blank",
          rel: "noopener noreferrer",
          children: "PayPal"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)((lib_default()), {
          text: "14iqQcwYPLBceRURHuFosGTDXxMmt3cLDp",
          onCopy: handleCopy,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
            className: Donation_module.button + " " + Donation_module.buttonBitcoin,
            onClick: handleClick({
              category: 'Donate',
              type: 'Bitcoin generate-validate-cpf'
            }),
            "aria-label": t(app_namespaceObject.HC.yu),
            "data-footnote": t(app_namespaceObject.HC.yu),
            children: "Bitcoin"
          })
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: Code_module.codeBox,
      style: {
        display: isCodeVisible ? 'block' : 'none'
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
        role: "presentation",
        alt: "QRCode Bitcoin Wallet",
        src: BTCQR,
        onKeyPress: toggleCodeVisibility,
        onClick: toggleCodeVisibility,
        className: Code_module.code + " " + (isCodeVisible ? Code_module.showCode : Code_module.hideCode)
      })
    })]
  });
};
;// CONCATENATED MODULE: ./src/site/components/Donate/index.ts

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(6992);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(8783);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(3948);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url.js
var web_url = __webpack_require__(285);
// EXTERNAL MODULE: ./node_modules/i18next/dist/esm/i18next.js + 10 modules
var i18next = __webpack_require__(8796);
;// CONCATENATED MODULE: ./src/site/components/ChangeLocale/ChangeLocale.module.styl
// extracted by mini-css-extract-plugin
/* harmony default export */ var ChangeLocale_module = ({"box":"box--25L-2aa","button":"button--37zh1jd","selected":"selected--ByGRi8E"});
;// CONCATENATED MODULE: ./src/site/components/ChangeLocale/ChangeLocale.tsx












var ChangeLocale = function ChangeLocale() {
  var handleLocale = function handleLocale(locale, callback) {
    return function () {
      i18next/* default.changeLanguage */.Z.changeLanguage(locale);
      window.history.replaceState({}, 'Gerador e Validador de CPF', "?lang=" + locale);
      callback && setTimeout(callback, 5);
    };
  };

  var _useState = (0,react.useState)(''),
      locale = _useState[0],
      setLocale = _useState[1];

  var _useState2 = (0,react.useState)(true),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  (0,react.useEffect)(function () {
    setLocale(i18next/* default.language */.Z.language);
  }, [i18next/* default.language */.Z.language]);
  (0,react.useEffect)(function () {
    var searchParams = new URLSearchParams(window.location.search);
    var lang = searchParams.get('lang');

    if (lang) {
      handleLocale(lang, function () {
        return setIsLoading(false);
      })();
    } else {
      setIsLoading(false);
    }
  }, []); // eslint-disable-next-line unicorn/no-null

  return isLoading ? null : /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: ChangeLocale_module.box,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("button", {
      className: ChangeLocale_module.button + " " + (locale === 'br' ? ChangeLocale_module.selected : ''),
      onClick: handleLocale('br'),
      children: "pt-br"
    }), ' ', "|", ' ', /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
      className: ChangeLocale_module.button + " " + (locale === 'en' ? ChangeLocale_module.selected : ''),
      onClick: handleLocale('en'),
      children: "en"
    })]
  });
};
;// CONCATENATED MODULE: ./src/site/components/ChangeLocale/index.ts

;// CONCATENATED MODULE: ./src/site/components/Header/Header.tsx











var Header = function Header() {
  var _useTranslation = (0,useTranslation/* useTranslation */.$)(),
      t = _useTranslation.t;

  var handleCopy = function handleCopy() {
    (0,react_toastify_esm/* toast */.Am)(t(app_namespaceObject.sY.Rp));
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("header", {
    className: Header_module.panel,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ChangeLocale, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(GithubCorner/* default */.Z, {
      href: "https://github.com/tiagoporto/gerador-validador-cpf/",
      size: 80,
      bannerColor: "#fff",
      octoColor: "#155078",
      ariaLabel: t(app_namespaceObject.Fs.E)
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("h1", {
      className: Header_module.panelTitle,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        children: "Gerador e"
      }), " validador de", ' ', /*#__PURE__*/(0,jsx_runtime.jsx)("abbr", {
        title: "Cadastro de Pessoas F\xEDsicas",
        children: "CPF"
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
      children: t(app_namespaceObject.Fs.k)
    }), /*#__PURE__*/(0,jsx_runtime.jsx)((lib_default()), {
      text: "npm install gerador-validador-cpf --save",
      onCopy: handleCopy,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("pre", {
        className: Header_module.copy,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("code", {
          className: "hljs",
          children: "npm install gerador-validador-cpf --save-dev"
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Donate, {})]
  });
};
;// CONCATENATED MODULE: ./src/site/components/Header/index.ts

;// CONCATENATED MODULE: ./src/site/components/Footer/Footer.module.styl
// extracted by mini-css-extract-plugin
/* harmony default export */ var Footer_module = ({"footer":"footer--3RIW6nn"});
;// CONCATENATED MODULE: ./src/site/components/Footer/Footer.tsx



var Footer = function Footer() {
  var date = new Date();
  return /*#__PURE__*/(0,jsx_runtime.jsx)("footer", {
    className: Footer_module.footer,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
      children: ["\xA9 2014-", date.getFullYear(), " | Tiago Porto"]
    })
  });
};
;// CONCATENATED MODULE: ./src/site/components/Footer/index.ts

;// CONCATENATED MODULE: ./src/site/components/GenerateSection/GenerateSection.module.styl
// extracted by mini-css-extract-plugin
/* harmony default export */ var GenerateSection_module = ({"generateButton":"generate-button--22NIOZg","generateSection":"generate-section--xIE-dUU","input":"input--OadszOs","center":"center--2EY3Toq"});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(7042);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(5306);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(9653);
;// CONCATENATED MODULE: ./src/lib/calcChecker.ts

var calcFirstChecker = function calcFirstChecker(firstNineDigits) {
  var sum = 0;

  for (var i = 0; i < 9; ++i) {
    sum += Number(firstNineDigits.charAt(i)) * (10 - i);
  }

  var lastSumChecker = sum % 11;
  return lastSumChecker < 2 ? 0 : 11 - lastSumChecker;
};
var calcSecondChecker = function calcSecondChecker(cpfWithChecker1) {
  var sum = 0;

  for (var i = 0; i < 10; ++i) {
    sum += Number(cpfWithChecker1.charAt(i)) * (11 - i);
  }

  var lastSumChecker2 = sum % 11;
  return lastSumChecker2 < 2 ? 0 : 11 - lastSumChecker2;
};
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__(9600);
;// CONCATENATED MODULE: ./src/lib/utils.ts


var generateFirstDigits = function generateFirstDigits() {
  var digits = '';

  for (var i = 0; i < 9; ++i) {
    digits += String(Math.floor(Math.random() * 10));
  }

  return digits;
};
var hasCPFLength = function hasCPFLength(cpf) {
  if (cpf.length > 11 || cpf.length < 11) {
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
    if (digits === new Array(digits.length + 1).join(String(i))) {
      return true;
    }
  }

  return false;
};
;// CONCATENATED MODULE: ./src/lib/CPF.ts





/**
 * [Gerador e Validador de CPF](https://tiagoporto.github.io/gerador-validador-cpf)
 *
 * @author Tiago Porto
 *
 * @function Generate
 * @param  {string} [formatOption="default"] - 'digits' | 'checker' | 'default'
 *
 * @returns {string}                  Valid and formatted CPF
 */

var generate = function generate(_temp) {
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
 *
 * @author Tiago Porto
 *
 * @function Validate
 * @param  {string} value  CPF number
 *
 * @returns {boolean}                true = valid || false = invalid
 */

var validate = function validate(value) {
  if (typeof value !== 'string') {
    return false;
  }

  var cleanCPF = String(value).replace(/[\s.-]/g, '');
  var firstNineDigits = cleanCPF.slice(0, 9);
  var checker = cleanCPF.slice(9, 11);

  if (!hasCPFLength(cleanCPF) || allDigitsAreEqual(cleanCPF)) {
    return false;
  }

  var checker1 = calcFirstChecker(firstNineDigits);
  var checker2 = calcSecondChecker("" + firstNineDigits + checker1);
  return checker === "" + checker1 + checker2;
};
// EXTERNAL MODULE: ./node_modules/react-imask/esm/index.js + 2 modules
var esm = __webpack_require__(6681);
;// CONCATENATED MODULE: ./src/site/components/GenerateSection/GenerateSection.tsx






function GenerateSection_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function GenerateSection_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { GenerateSection_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { GenerateSection_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







 // @ts-expect-error: Missing types


var GenerateSection = function GenerateSection() {
  var _useState = (0,react.useState)(''),
      cpf = _useState[0],
      setCpf = _useState[1];

  var _useTranslation = (0,useTranslation/* useTranslation */.$)(),
      t = _useTranslation.t;

  var handleCopy = function handleCopy() {
    (0,react_toastify_esm/* toast */.Am)(t(app_namespaceObject.sY.uN));
  };

  var generateNewCPF = function generateNewCPF(type) {
    return function () {
      setCpf(generate());

      if (true) {
        ;

        GenerateSection_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var ReactGA;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return __webpack_require__.e(/* import() */ 516).then(__webpack_require__.bind(__webpack_require__, 1516));

                case 2:
                  ReactGA = _context.sent;
                  ReactGA.ga('send', 'event', 'Generate', type, 'Generate CPF');

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }))();
      }
    };
  };

  (0,react.useEffect)(function () {
    generateNewCPF('load')();
  }, []);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("section", {
    className: GenerateSection_module.generateSection,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: GenerateSection_module.center,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h2", {
        children: t(app_namespaceObject.R_.T)
      }), /*#__PURE__*/(0,jsx_runtime.jsx)((lib_default()), {
        text: cpf,
        onCopy: handleCopy,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(esm/* IMaskInput */.o, {
          "aria-label": t(app_namespaceObject.R_.h),
          value: cpf,
          className: GenerateSection_module.input,
          type: "text",
          mask: '000.000.000-00',
          readOnly: true
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
        onClick: generateNewCPF('click'),
        className: GenerateSection_module.generateButton,
        type: "button",
        children: t(app_namespaceObject.R_.T)
      })]
    })
  });
};
;// CONCATENATED MODULE: ./src/site/components/GenerateSection/index.ts

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(9601);
;// CONCATENATED MODULE: ./src/site/components/ValidateSection/ValidateSection.module.styl
// extracted by mini-css-extract-plugin
/* harmony default export */ var ValidateSection_module = ({"validateSection":"validate-section--3OAfBgG","center":"center--1n3pPfe","validateSectionInput":"validate-section__input--2zHMrET","message":"message--BFVVYis","messageValid":"message--valid--3-nf7Bw","messageInvalid":"message--invalid--1lIQGyJ"});
;// CONCATENATED MODULE: ./src/site/components/ValidateSection/ValidateSection.tsx







function ValidateSection_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function ValidateSection_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { ValidateSection_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { ValidateSection_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



 // @ts-expect-error: Missing types





var enableAnalytics = /*#__PURE__*/function () {
  var _ref = ValidateSection_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var ReactGA;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return __webpack_require__.e(/* import() */ 516).then(__webpack_require__.bind(__webpack_require__, 1516));

          case 2:
            ReactGA = _context.sent;
            ReactGA.ga('send', 'event', 'Validate', 'type', 'Validate CPF');

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function enableAnalytics() {
    return _ref.apply(this, arguments);
  };
}();

var ValidateSection = function ValidateSection() {
  var _useTranslation = (0,useTranslation/* useTranslation */.$)(),
      t = _useTranslation.t;

  var _useState = (0,react.useState)({
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

  var updateValidationState = function updateValidationState(parameters) {
    setValidation(function (previousState) {
      return Object.assign({}, previousState, parameters);
    });
  };

  var handleChangeCPF = function handleChangeCPF(cpf) {
    updateValidationState({
      tempCpf: cpf
    });
  };

  (0,react.useEffect)(function () {
    if (tempCpf.length === 14) {
       true && enableAnalytics();

      var _isValid = validate(tempCpf);

      var _message = _isValid ? t(app_namespaceObject.sY.$n) : t(app_namespaceObject.sY.tO);

      updateValidationState({
        cpf: tempCpf,
        isValid: _isValid,
        message: _message
      });
    } else {
      var _message2 = tempCpf ? t(app_namespaceObject.sY.uq) : '';

      updateValidationState({
        cpf: '',
        message: _message2
      });
    }
  }, [tempCpf]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("section", {
    className: ValidateSection_module.validateSection,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: ValidateSection_module.center,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h2", {
        children: t(app_namespaceObject.Gu.T)
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(esm/* IMaskInput */.o, {
        "aria-label": t(app_namespaceObject.Gu.x),
        value: tempCpf,
        placeholder: t(app_namespaceObject.Gu.x),
        onAccept: handleChangeCPF,
        className: ValidateSection_module.validateSectionInput,
        type: "text",
        mask: '000.000.000-00',
        required: true
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: ValidateSection_module.validateSectionInput + " " + ValidateSection_module.message + " " + (isValid && cpf ? ValidateSection_module.messageValid : '') + " " + (!isValid && cpf ? ValidateSection_module.messageInvalid : ''),
        children: message || '...'
      })]
    })
  });
};
;// CONCATENATED MODULE: ./src/site/components/ValidateSection/index.ts

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(2222);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(7803);
;// CONCATENATED MODULE: ./src/site/components/InfoSection/InfoSection.module.styl
// extracted by mini-css-extract-plugin
/* harmony default export */ var InfoSection_module = ({"center":"center--2tz0ZEL","infoSection":"info-section--3ypqygE","list":"list--3T6FcKQ"});
// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/Trans.js
var Trans = __webpack_require__(9189);
;// CONCATENATED MODULE: ./src/site/components/InfoSection/InfoSection.tsx










var InfoSection = function InfoSection() {
  var _useTranslation = (0,useTranslation/* useTranslation */.$)(),
      t = _useTranslation.t;

  return /*#__PURE__*/(0,jsx_runtime.jsx)("section", {
    className: InfoSection_module.infoSection,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: InfoSection_module.center,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("p", {
        children: t(app_namespaceObject.um.disclaimer)
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* Trans */.c, {
        i18nKey: app_namespaceObject.um.algorithm,
        components: [/*#__PURE__*/(0,jsx_runtime.jsx)("a", {
          href: "http://www.geradorcpf.com/algoritmo_do_cpf.htm",
          children: "mock"
        }, "link")]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* Trans */.c, {
          i18nKey: app_namespaceObject.um.disclaimerValidCPF,
          components: [/*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "http://www.receita.fazenda.gov.br/aplicacoes/atcta/cpf/consultapublica.asp",
            children: "mock"
          }, "link")]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
        children: t(app_namespaceObject.um.cpfByState)
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("blockquote", {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* Trans */.c, {
          i18nKey: app_namespaceObject.um.example,
          components: [/*#__PURE__*/(0,jsx_runtime.jsx)("strong", {}, "strong")]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
        children: t(app_namespaceObject.um.codeByState)
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("ol", {
        className: InfoSection_module.list,
        children: [].concat(new Array(10).keys()).map(function (index) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
            children: t(app_namespaceObject.um["stateCode" + (index + 1)])
          }, "item" + index);
        })
      })]
    })
  });
};
;// CONCATENATED MODULE: ./src/site/components/InfoSection/index.ts

;// CONCATENATED MODULE: ./src/site/components/Main/Main.tsx





var Main = function Main() {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("main", {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(GenerateSection, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(ValidateSection, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(InfoSection, {})]
  });
};
;// CONCATENATED MODULE: ./src/site/components/Main/index.ts

;// CONCATENATED MODULE: ./src/site/App.tsx











var App = function App() {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(react.StrictMode, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Header, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(Main, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(Footer, {})]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(react_toastify_esm/* ToastContainer */.Ix, {
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
    })]
  });
};
// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/context.js
var context = __webpack_require__(8718);
;// CONCATENATED MODULE: ./src/site/locales/en/app.json
var locales_en_app_namespaceObject = JSON.parse("{\"app\":{\"title\":\"Gerador e validador de CPF Open-Source | Tiago Porto\",\"description\":\"Gerador e validador de CPF, open-source JS lib to generate and validate CPF.\",\"keywords\":\"cpf,gerar,gerador,generator,generates,validador,valida,validates,online\"},\"header\":{\"libInfo\":\"JS open-source lib to generate and validate CPF.\",\"projectPageGithub\":\"Github project page\"},\"validate\":{\"title\":\"Validate\",\"insertCPF\":\"Insert CPF\"},\"generate\":{\"title\":\"Generate\",\"cpfGenerated\":\"Generated CPF\"},\"info\":{\"algorithm\":\"Implements the follow <0>algorithm</0>.\",\"disclaimer\":\"Lib available to assist developers in software testing, doesn't have link with \\\"Receita Federal do Brasil\\\".\",\"cpfByState\":\"The last digit before verifiers (last 2 digits), corresponds with the brasilian state were CPF was issued.\",\"codeByState\":\"Code by brasilian states:\",\"example\":\"Example: CPF <0>XXX.XXX.XX8-XX</0>, number 8 corresponds to São Paulo state.\",\"stateCode1\":\"1. Distrito Federal, Goiás, Mato Grosso do Sul and Tocantins;\",\"stateCode2\":\"2. Pará, Amazonas, Acre, Amapá, Rondônia and Roraima;\",\"stateCode3\":\"3. Ceará, Maranhão and Piauí;\",\"stateCode4\":\"4. Pernambuco, Rio Grande do Norte, Paraíba and Alagoas;\",\"stateCode5\":\"5. Bahia and Sergipe;\",\"stateCode6\":\"6. Minas Gerais;\",\"stateCode7\":\"7. Rio de Janeiro and Espírito Santo;\",\"stateCode8\":\"8. São Paulo;\",\"stateCode9\":\"9. Paraná and Santa Catarina;\",\"stateCode10\":\"0. Rio Grande do Sul.\",\"disclaimerValidCPF\":\"Valid CPF doesn't mean is registered or is active. For those informations, check <0>Secretaria da Receita Federal do Brasil</0>.\"},\"donate\":{\"leaveStar\":\"Leave a ★\",\"contributePaypal\":\"Contribute (Paypal)\",\"contributeBitcoin\":\"Contribute (bitcoin)\"},\"messages\":{\"copied\":\"Copied!\",\"cpfCopied\":\"CPF Copied!\",\"validCPF\":\"CPF Valid\",\"invalidCPF\":\"CPF Invalid\",\"walletCopied\":\"Wallet copied!\",\"incomplete\":\"incomplete\"}}");
;// CONCATENATED MODULE: ./src/site/locales/br/app.json
var br_app_namespaceObject = JSON.parse("{\"app\":{\"title\":\"Gerador e validador de CPF Open-Source | Tiago Porto\",\"description\":\"Gerador e validador de CPF, biblioteca JS open-source para gerar e validar CPF.\",\"keywords\":\"cpf,gerar,gerador,generator,generates,validador,valida,validates,online\"},\"header\":{\"libInfo\":\"Lib JS open-source para gerar e validar CPF.\",\"projectPageGithub\":\"Página do projeto no github\"},\"validate\":{\"title\":\"Validar\",\"insertCPF\":\"Insira o CPF\"},\"generate\":{\"title\":\"Gerar\",\"cpfGenerated\":\"CPF gerado\"},\"info\":{\"algorithm\":\"Utiliza o seguinte <0>algoritmo</0>.\",\"disclaimer\":\"Lib disponível para auxiliar desenvolvedores em testes de software, não possui qualquer vínculo com a Receita Federal do Brasil.\",\"cpfByState\":\"O CPF guarda o estado brasileiro de onde foi emitido, esse número corresponde ao último algarismo anterior aos dois dígitos verificadores.\",\"codeByState\":\"Códigos correspondentes aos estados brasileiros:\",\"example\":\"Exemplo: CPF <0>XXX.XXX.XX8-XX</0>, o número 8 corresponde ao estado de São Paulo.\",\"stateCode1\":\"1. Distrito Federal, Goiás, Mato Grosso do Sul e Tocantins;\",\"stateCode2\":\"2. Pará, Amazonas, Acre, Amapá, Rondônia e Roraima;\",\"stateCode3\":\"3. Ceará, Maranhão e Piauí;\",\"stateCode4\":\"4. Pernambuco, Rio Grande do Norte, Paraíba e Alagoas;\",\"stateCode5\":\"5. Bahia e Sergipe;\",\"stateCode6\":\"6. Minas Gerais;\",\"stateCode7\":\"7. Rio de Janeiro e Espírito Santo;\",\"stateCode8\":\"8. São Paulo;\",\"stateCode9\":\"9. Paraná e Santa Catarina;\",\"stateCode10\":\"0. Rio Grande do Sul.\",\"disclaimerValidCPF\":\"Um CPF válido não significa que ele exista no Cadastro Nacional de Pessoas Físicas, nem que esteja ativo ou com situação cadastral regular. Para conferir tais dados, consulte o site oficial da <0>Secretaria da Receita Federal do Brasil</0>.\"},\"donate\":{\"leaveStar\":\"Deixe um ★\",\"contributePaypal\":\"Contribua pelo Paypal\",\"contributeBitcoin\":\"Contribua por bitcoin\"},\"messages\":{\"copied\":\"Copiado!\",\"cpfCopied\":\"CPF copiado!\",\"validCPF\":\"CPF Válido\",\"invalidCPF\":\"CPF Inválido\",\"walletCopied\":\"Wallet copiado!\",\"incomplete\":\"incompleto\"}}");
;// CONCATENATED MODULE: ./src/site/locales/index.ts
// eslint-disable-next-line import/no-webpack-loader-syntax
 // eslint-disable-next-line import/no-webpack-loader-syntax


var i18nResources = {
  en: locales_en_app_namespaceObject,
  br: br_app_namespaceObject
};
;// CONCATENATED MODULE: ./src/site/index.tsx







function site_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function site_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { site_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { site_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







var loadOnProd = /*#__PURE__*/function () {
  var _ref = site_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var ReactGA, _yield$import, registerServiceWorker;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return __webpack_require__.e(/* import() | react-ga */ 516).then(__webpack_require__.bind(__webpack_require__, 1516));

          case 2:
            ReactGA = _context.sent;
            ReactGA.initialize('UA-32351360-4');
            ReactGA.pageview(window.location.pathname + window.location.search);
            _context.next = 7;
            return __webpack_require__.e(/* import() | serviceWorker */ 49).then(__webpack_require__.bind(__webpack_require__, 6946));

          case 7:
            _yield$import = _context.sent;
            registerServiceWorker = _yield$import.registerServiceWorker;
            registerServiceWorker();

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function loadOnProd() {
    return _ref.apply(this, arguments);
  };
}();

 true && loadOnProd();
i18next/* default.use */.Z.use(context/* initReactI18next */.Db).init({
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
react_dom.render( /*#__PURE__*/(0,jsx_runtime.jsx)(App, {}), document.querySelector('#root'));

if (false) {}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = function() {}
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + (chunkId === 49 ? "serviceWorker" : chunkId) + "." + {"49":"01778c589b760879a668","516":"1c6e1591f6b6ef730571"}[chunkId] + ".bundle.js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.miniCssF = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + ({"49":"serviceWorker","826":"index"}[chunkId] || chunkId) + "." + {"49":"31d6cfe0d16ae931b73c","252":"31d6cfe0d16ae931b73c","358":"cc3aec8fb66da02258c8","516":"31d6cfe0d16ae931b73c","986":"3de4ecc17febce29f64d"}[chunkId] + ".css";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "gerador-validador-cpf:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			826: 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			[5743,252,358,986],
/******/ 			[4048,252,358,986],
/******/ 			[1532,252,358,986],
/******/ 			[189,252,358,986],
/******/ 			[155,252,358,986]
/******/ 		];
/******/ 		__webpack_require__.f.j = function(chunkId, promises) {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise(function(resolve, reject) {
/******/ 								installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 							});
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = function(event) {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = function() {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			var executeModules = data[3];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgerador_validador_cpf"] = self["webpackChunkgerador_validador_cpf"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = function() {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = function() {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (function() {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	return __webpack_require__.x();
/******/ })()
;
//# sourceMappingURL=index.87393fc3871518815811.js.map