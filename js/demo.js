!function(P){function n(n){for(var e,t,o=n[0],r=n[1],a=n[2],i=0,d=[];i<o.length;i++)t=o[i],Object.prototype.hasOwnProperty.call(T,t)&&T[t]&&d.push(T[t][0]),T[t]=0;for(e in r)Object.prototype.hasOwnProperty.call(r,e)&&(P[e]=r[e]);for(_&&_(n);d.length;)d.shift()();return y.push.apply(y,a||[]),s()}function s(){for(var n,e=0;e<y.length;e++){for(var t=y[e],o=!0,r=1;r<t.length;r++){var a=t[r];0!==T[a]&&(o=!1)}o&&(y.splice(e--,1),n=N(N.s=t[0]))}return n}var t=window.webpackHotUpdate;window.webpackHotUpdate=function(n,e){!function(n,e){if(!M[n]||!u[n])return;for(var t in u[n]=!1,e)Object.prototype.hasOwnProperty.call(e,t)&&(S[t]=e[t]);0==--l&&0===f&&b()}(n,e),t&&t(n,e)};var a,o=!0,D="28021b4453c411bf318e",e=1e4,C={},B=[],r=[];function i(e){var t=Q[e];if(!t)return N;function o(n){return t.hot.active?(Q[n]?-1===Q[n].parents.indexOf(e)&&Q[n].parents.push(e):(B=[e],a=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),B=[]),N(n)}function n(e){return{configurable:!0,enumerable:!0,get:function(){return N[e]},set:function(n){N[e]=n}}}for(var r in N)Object.prototype.hasOwnProperty.call(N,r)&&"e"!==r&&"t"!==r&&Object.defineProperty(o,r,n(r));return o.e=function(n){return"ready"===H&&R("prepare"),f++,N.e(n).then(e,function(n){throw e(),n});function e(){f--,"prepare"===H&&(p[n]||g(n),0===f&&0===l&&b())}},o.t=function(n,e){return 1&e&&(n=o(n)),N.t(n,-2&e)},o}var d=[],H="idle";function R(n){H=n;for(var e=0;e<d.length;e++)d[e].call(null,n)}var c,S,A,l=0,f=0,p={},u={},M={};function I(n){return+n+""===n?+n:n}function m(n){if("idle"!==H)throw new Error("check() is only allowed in idle status");return o=n,R("check"),function(n){return n=n||1e4,new Promise(function(e,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var o=new XMLHttpRequest,r=N.p+""+D+".hot-update.json";o.open("GET",r,!0),o.timeout=n,o.send(null)}catch(n){return t(n)}o.onreadystatechange=function(){if(4===o.readyState)if(0===o.status)t(new Error("Manifest request to "+r+" timed out."));else if(404===o.status)e();else if(200!==o.status&&304!==o.status)t(new Error("Manifest request to "+r+" failed."));else{try{var n=JSON.parse(o.responseText)}catch(n){return void t(n)}e(n)}}})}(e).then(function(n){if(!n)return R("idle"),null;u={},p={},M=n.c,A=n.h,R("prepare");var e=new Promise(function(n,e){c={resolve:n,reject:e}});for(var t in S={},T)g(t);return"prepare"===H&&0===f&&0===l&&b(),e})}function g(n){M[n]?(u[n]=!0,l++,function(n){var e=document.createElement("script");e.charset="utf-8",e.src=N.p+""+n+"."+D+".hot-update.js",document.head.appendChild(e)}(n)):p[n]=!0}function b(){R("ready");var e=c;if(c=null,e)if(o)Promise.resolve().then(function(){return h(o)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var t in S)Object.prototype.hasOwnProperty.call(S,t)&&n.push(I(t));e.resolve(n)}}function h(t){if("ready"!==H)throw new Error("apply() is only allowed in ready status");var n,e,o,l,r;function a(n){for(var e=[n],t={},o=e.map(function(n){return{chain:[n],id:n}});0<o.length;){var r=o.pop(),a=r.id,i=r.chain;if((l=Q[a])&&!l.hot._selfAccepted){if(l.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:a};if(l.hot._main)return{type:"unaccepted",chain:i,moduleId:a};for(var d=0;d<l.parents.length;d++){var s=l.parents[d],c=Q[s];if(c){if(c.hot._declinedDependencies[a])return{type:"declined",chain:i.concat([s]),moduleId:a,parentId:s};-1===e.indexOf(s)&&(c.hot._acceptedDependencies[a]?(t[s]||(t[s]=[]),f(t[s],[a])):(delete t[s],e.push(s),o.push({chain:i.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:n,outdatedModules:e,outdatedDependencies:t}}function f(n,e){for(var t=0;t<e.length;t++){var o=e[t];-1===n.indexOf(o)&&n.push(o)}}t=t||{};function i(){console.warn("[HMR] unexpected require("+u.moduleId+") to disposed module")}var d={},s=[],c={};for(var p in S)if(Object.prototype.hasOwnProperty.call(S,p)){var u;r=I(p);var m=!1,g=!1,b=!1,h="";switch((u=S[p]?a(r):{type:"disposed",moduleId:p}).chain&&(h="\nUpdate propagation: "+u.chain.join(" -> ")),u.type){case"self-declined":t.onDeclined&&t.onDeclined(u),t.ignoreDeclined||(m=new Error("Aborted because of self decline: "+u.moduleId+h));break;case"declined":t.onDeclined&&t.onDeclined(u),t.ignoreDeclined||(m=new Error("Aborted because of declined dependency: "+u.moduleId+" in "+u.parentId+h));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(u),t.ignoreUnaccepted||(m=new Error("Aborted because "+r+" is not accepted"+h));break;case"accepted":t.onAccepted&&t.onAccepted(u),g=!0;break;case"disposed":t.onDisposed&&t.onDisposed(u),b=!0;break;default:throw new Error("Unexception type "+u.type)}if(m)return R("abort"),Promise.reject(m);if(g)for(r in c[r]=S[r],f(s,u.outdatedModules),u.outdatedDependencies)Object.prototype.hasOwnProperty.call(u.outdatedDependencies,r)&&(d[r]||(d[r]=[]),f(d[r],u.outdatedDependencies[r]));b&&(f(s,[u.moduleId]),c[r]=i)}var y,v=[];for(e=0;e<s.length;e++)r=s[e],Q[r]&&Q[r].hot._selfAccepted&&c[r]!==i&&v.push({module:r,errorHandler:Q[r].hot._selfAccepted});R("dispose"),Object.keys(M).forEach(function(n){!1===M[n]&&function(n){delete T[n]}(n)});for(var w,x,_=s.slice();0<_.length;)if(r=_.pop(),l=Q[r]){var k={},O=l.hot._disposeHandlers;for(o=0;o<O.length;o++)(n=O[o])(k);for(C[r]=k,l.hot.active=!1,delete Q[r],delete d[r],o=0;o<l.children.length;o++){var X=Q[l.children[o]];X&&0<=(y=X.parents.indexOf(r))&&X.parents.splice(y,1)}}for(r in d)if(Object.prototype.hasOwnProperty.call(d,r)&&(l=Q[r]))for(x=d[r],o=0;o<x.length;o++)w=x[o],0<=(y=l.children.indexOf(w))&&l.children.splice(y,1);for(r in R("apply"),D=A,c)Object.prototype.hasOwnProperty.call(c,r)&&(P[r]=c[r]);var z=null;for(r in d)if(Object.prototype.hasOwnProperty.call(d,r)&&(l=Q[r])){x=d[r];var E=[];for(e=0;e<x.length;e++)if(w=x[e],n=l.hot._acceptedDependencies[w]){if(-1!==E.indexOf(n))continue;E.push(n)}for(e=0;e<E.length;e++){n=E[e];try{n(x)}catch(n){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:r,dependencyId:x[e],error:n}),t.ignoreErrored||(z=z||n)}}}for(e=0;e<v.length;e++){var j=v[e];r=j.module,B=[r];try{N(r)}catch(e){if("function"==typeof j.errorHandler)try{j.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:r,error:n,originalError:e}),t.ignoreErrored||(z=z||n),z=z||e}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:r,error:e}),t.ignoreErrored||(z=z||e)}}return z?(R("fail"),Promise.reject(z)):(R("idle"),new Promise(function(n){n(s)}))}var Q={},T={0:0},y=[];function N(n){if(Q[n])return Q[n].exports;var e=Q[n]={i:n,l:!1,exports:{},hot:function(n){var o={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:a!==n,active:!0,accept:function(n,e){if(void 0===n)o._selfAccepted=!0;else if("function"==typeof n)o._selfAccepted=n;else if("object"==typeof n)for(var t=0;t<n.length;t++)o._acceptedDependencies[n[t]]=e||function(){};else o._acceptedDependencies[n]=e||function(){}},decline:function(n){if(void 0===n)o._selfDeclined=!0;else if("object"==typeof n)for(var e=0;e<n.length;e++)o._declinedDependencies[n[e]]=!0;else o._declinedDependencies[n]=!0},dispose:function(n){o._disposeHandlers.push(n)},addDisposeHandler:function(n){o._disposeHandlers.push(n)},removeDisposeHandler:function(n){var e=o._disposeHandlers.indexOf(n);0<=e&&o._disposeHandlers.splice(e,1)},check:m,apply:h,status:function(n){if(!n)return H;d.push(n)},addStatusHandler:function(n){d.push(n)},removeStatusHandler:function(n){var e=d.indexOf(n);0<=e&&d.splice(e,1)},data:C[n]};return a=void 0,o}(n),parents:(r=B,B=[],r),children:[]};return P[n].call(e.exports,e,e.exports,i(n)),e.l=!0,e.exports}N.m=P,N.c=Q,N.d=function(n,e,t){N.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},N.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},N.t=function(e,n){if(1&n&&(e=N(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(N.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)N.d(t,o,function(n){return e[n]}.bind(null,o));return t},N.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return N.d(e,"a",e),e},N.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},N.p="",N.h=function(){return D};var v=window.webpackJsonp=window.webpackJsonp||[],w=v.push.bind(v);v.push=n,v=v.slice();for(var x=0;x<v.length;x++)n(v[x]);var _=w;y.push([26,1]),s()}([,,,,,,function(n,e,t){(n.exports=t(1)(!1)).push([n.i,'/* ==================================================================\n   Main Styles\n   ================================================================== */\n/*\n*\n* Box model reset\n* http://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/\n*\n*/\nhtml {\n  font-size: 100%;\n  box-sizing: border-box;\n}\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\nbody {\n  font: normal normal 16px/1.5em Helvetica, Arial, sans-serif;\n  background-color: #217bb8;\n  color: #fff;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-smoothing: auto;\n  font-feature-settings: "liga", "kern";\n}\n/*\n*\n* Better Font Smoothing in Chrome & Safari\n* http://www.intridea.com/blog/2014/5/8/better-font-smoothing-in-chrome-on-mac-os-x\n*\n*/\n@media only screen and (-webkit-min-device-pixel-ratio: 1.25), only screen and (min-device-pixel-ratio: 1.25), only screen and (min-resolution: 200dpi), only screen and (min-resolution: 1.25dppx) {\n  body {\n    -webkit-font-smoothing: subpixel-antialiased;\n  }\n}\n::selection {\n  background: #217bb8;\n  color: #fff;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: bold;\n}\nh1 {\n  font-size: 2.25em;\n  line-height: 1.333333333333333em;\n  margin-top: 0.666666666666667em;\n  margin-bottom: 0.666666666666667em;\n}\nh2 {\n  font-size: 2em;\n  line-height: 1.5em;\n  margin-top: 0.75em;\n  margin-bottom: 0.75em;\n}\nh3 {\n  font-size: 1.875em;\n  line-height: 1.6em;\n  margin-top: 0.8em;\n  margin-bottom: 0.8em;\n}\nh4 {\n  font-size: 1.625em;\n  line-height: 1.846153846153846em;\n  margin-top: 0.923076923076923em;\n  margin-bottom: 0.923076923076923em;\n}\nh5 {\n  font-size: 1.5em;\n  line-height: 2em;\n  margin-top: 1em;\n  margin-bottom: 1em;\n}\nh6 {\n  font-size: 1.25em;\n  line-height: 1.2em;\n  margin-top: 1.2em;\n  margin-bottom: 1.2em;\n}\np {\n  font-size: 1em;\n  line-height: 1.5em;\n  margin-top: 1.5em;\n  margin-bottom: 1.5em;\n  hyphens: auto;\n}\nul,\nol,\ndl {\n  margin-top: 1.5em;\n  margin-bottom: 1.5em;\n}\nli ul,\nli ol,\nli dl {\n  margin: 0;\n}\nblockquote {\n  font-style: italic;\n  padding-left: 0.625em;\n  border-left: 0.3125em solid #999;\n  margin-top: 1.5em;\n  margin-bottom: 1.5em;\n}\na {\n  color: #fff;\n}\na:visited,\na:active,\na:hover {\n  color: #ffff32;\n}\nabbr {\n  text-decoration: underline;\n}\nkbd {\n  color: #fff;\n  font-family: "Courier New", Courier, monospace;\n  background-color: rgba(0,0,0,0.3);\n  border-radius: 0.1875em;\n  display: inline-block;\n  vertical-align: bottom;\n  padding: 0 0.2em 0 0.2em;\n}\ncode {\n  color: #0f0;\n  background: #242424;\n  padding: 0 0.2em;\n  display: inline-block;\n  border-radius: 0.1875em;\n  vertical-align: bottom;\n  overflow: auto;\n}\npre {\n  overflow: auto;\n  font-feature-settings: "tnum";\n}\npre code {\n  padding: 0 0.75em;\n  padding-top: 0.75em;\n  padding-bottom: 0.75em;\n  width: 100%;\n}\nfieldset {\n  margin: 0;\n  border-color: #999;\n  border-style: solid;\n  border-width: 0.0625em;\n  padding: 1.4375em;\n  margin-bottom: 1.5em;\n}\ninput[type="text"],\ninput[type="search"],\ninput[type="email"],\ninput[type="number"],\ninput[type="password"],\nselect,\ntextarea {\n  font-size: 1em;\n  line-height: 1.5em;\n  border-color: #999;\n  border-style: solid;\n  border-width: 0.0625em;\n  padding: 0.3125em;\n  border-radius: 5px;\n  color: #595959;\n  margin-bottom: 0.75em;\n}\ninput[type="text"]:focus,\ninput[type="search"]:focus,\ninput[type="email"]:focus,\ninput[type="number"]:focus,\ninput[type="password"]:focus,\nselect:focus,\ntextarea:focus {\n  border-color: #66afe9;\n  outline: 0;\n  box-shadow: inset 0 1px 1px rgba(0,0,0,0.075), 0 0 8px rgba(102,175,233,0.6);\n}\ninput[type="text"],\ninput[type="search"],\ninput[type="email"],\ninput[type="number"],\ninput[type="password"],\nselect {\n  height: 2.25em;\n}\nselect {\n  width: auto;\n}\n::placeholder {\n  color: #8c8c8c;\n  font-size: 0.875em;\n}\nbutton,\ninput[type="button"],\ninput[type="reset"],\ninput[type="submit"],\nbutton:disabled,\ninput[type="button"]:disabled,\ninput[type="reset"]:disabled,\ninput[type="submit"]:disabled {\n  font-size: 0.875em;\n  line-height: 1.714285714285714em;\n  border: none;\n  border-radius: 5px;\n  display: inline-block;\n  padding: 0 1.25em;\n  overflow: hidden;\n  margin: 0;\n  text-align: center;\n  text-decoration: none;\n  text-transform: uppercase;\n  user-select: none;\n  vertical-align: bottom;\n  -webkit-tap-highlight-color: transparent;\n  box-shadow: 0 1px 2px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.1);\n  color: #fff;\n  background-color: #3faa96;\n  transition: 0.15s ease-out;\n  cursor: pointer;\n}\nbutton:hover:not([disabled]),\ninput[type="button"]:hover:not([disabled]),\ninput[type="reset"]:hover:not([disabled]),\ninput[type="submit"]:hover:not([disabled]) {\n  background-color: #2bbbad;\n  box-shadow: 0 1px 4px rgba(0,0,0,0.15), 0 1px 4px rgba(0,0,0,0.15);\n}\nbutton:disabled,\ninput[type="button"]:disabled,\ninput[type="reset"]:disabled,\ninput[type="submit"]:disabled {\n  background-color: #dfdfdf;\n  color: #9f9f9f;\n  cursor: default;\n}\n.main {\n  max-width: 1000px;\n  padding: 0 20px;\n  margin: auto;\n}\n.panel {\n  background: #155078;\n  padding: 24px 0;\n  text-align: center;\n  margin-bottom: 1.5em;\n}\n.panel iframe {\n  height: 24px !important;\n}\n.panel__title {\n  font-family: \'PT Sans\', sans-serif;\n  margin-top: 0;\n}\n.panel__logo {\n  max-height: 96px;\n  display: block;\n  margin: 0 auto 24px;\n}\n.github-corner:hover .octo-arm {\n  animation: octocat-wave 560ms ease-in-out;\n}\n@media (max-width: 500px) {\n  .github-corner .octo-arm {\n    animation: octocat-wave 560ms ease-in-out;\n  }\n  .github-corner:hover .octo-arm {\n    animation: none;\n  }\n}\n@-moz-keyframes octocat-wave {\n  0%, 100% {\n    transform: rotate(0);\n  }\n  20%, 60% {\n    transform: rotate(-25deg);\n  }\n  40%, 80% {\n    transform: rotate(10deg);\n  }\n}\n@-webkit-keyframes octocat-wave {\n  0%, 100% {\n    transform: rotate(0);\n  }\n  20%, 60% {\n    transform: rotate(-25deg);\n  }\n  40%, 80% {\n    transform: rotate(10deg);\n  }\n}\n@-o-keyframes octocat-wave {\n  0%, 100% {\n    transform: rotate(0);\n  }\n  20%, 60% {\n    transform: rotate(-25deg);\n  }\n  40%, 80% {\n    transform: rotate(10deg);\n  }\n}\n@keyframes octocat-wave {\n  0%, 100% {\n    transform: rotate(0);\n  }\n  20%, 60% {\n    transform: rotate(-25deg);\n  }\n  40%, 80% {\n    transform: rotate(10deg);\n  }\n}\n.hljs {\n  border-radius: 5px;\n}\n.generate-section__copy-button {\n  text-transform: lowercase;\n  padding-top: 0.375em;\n  padding-bottom: 0.375em;\n  font-size: 1em;\n  line-height: 1.5em;\n  margin-bottom: 0.75em;\n  background-color: #0d314a;\n}\n.generate-section__copy-button:hover:not([disabled]) {\n  background-color: #103d5c;\n}\n@media (max-width: 48em) {\n  .generate-section__copy-button {\n    width: 100%;\n  }\n}\n@media (max-width: 48em) {\n  .generate-section__input--generated {\n    width: 100%;\n  }\n}\n.generate-section__submit-button {\n  display: block;\n  background-color: #0d314a;\n  margin-bottom: 0.75em;\n  font-size: 0.875em;\n  line-height: 3.428571428571428em;\n}\n.generate-section__submit-button:hover:not([disabled]) {\n  background-color: #103d5c;\n}\n@media (max-width: 48em) {\n  .generate-section__submit-button {\n    width: 100%;\n  }\n}\n.validate-section__label {\n  display: block;\n}\n.validate-section__submit-button {\n  display: block;\n  background-color: #0d314a;\n  font-size: 0.875em;\n  line-height: 3.428571428571428em;\n}\n.validate-section__submit-button:hover:not([disabled]) {\n  background-color: #103d5c;\n}\n@media (max-width: 48em) {\n  .validate-section__submit-button {\n    width: 100%;\n  }\n}\n.validate-section__input--valid {\n  color: #008000;\n  border-color: #8cff8c;\n  background: #8cff8c;\n  transition: all ease 1s;\n}\n.validate-section__input--invalid {\n  color: #f00;\n  border-color: #ffb3b3;\n  background: #ffb3b3;\n  transition: all ease 1s;\n}\n@media (max-width: 48em) {\n  #validate-section__input--to-format,\n  .validate-section__input--message {\n    width: 100%;\n  }\n}\n.format-section__label {\n  display: block;\n}\n.format-section__copy-button {\n  text-transform: lowercase;\n  padding-top: 0.375em;\n  padding-bottom: 0.375em;\n  font-size: 1em;\n  line-height: 1.5em;\n  margin-bottom: 0.75em;\n  background-color: #0d314a;\n}\n.format-section__copy-button:hover:not([disabled]) {\n  background-color: #103d5c;\n}\n@media (max-width: 48em) {\n  .format-section__copy-button {\n    width: 100%;\n  }\n}\n@media (max-width: 48em) {\n  .format-section #format-section__input,\n  .format-section__input--message,\n  .format-section__params {\n    width: 100%;\n  }\n}\n.format-section__submit-button {\n  display: block;\n  background-color: #0d314a;\n  font-size: 0.875em;\n  line-height: 3.428571428571428em;\n}\n.format-section__submit-button:hover:not([disabled]) {\n  background-color: #103d5c;\n}\n@media (max-width: 48em) {\n  .format-section__submit-button {\n    width: 100%;\n  }\n}\n.list--unordered {\n  padding-left: 1.25em;\n  list-style-type: none;\n}\n.list--definition {\n  margin: 24px 0;\n}\n.list__term {\n  font-weight: bold;\n  font-size: 1.25em;\n  line-height: 1.2em;\n  margin-top: 0.75em;\n}\n.list__definition {\n  margin: 0;\n}\n.footer {\n  background: #175681;\n  overflow: hidden;\n  text-align: center;\n}\n/* ==================================================================\n   Media Queries\n   ================================================================== */\n@media print {\n  * {\n    background: transparent !important;\n    color: #000 !important /* Black prints faster: h5bp.com/s */;\n    text-shadow: none !important;\n    filter: none !important;\n    -ms-filter: none !important;\n  }\n  body {\n    margin: 0;\n    padding: 0;\n    line-height: 1.4em;\n    font: 12pt Georgia, "Times New Roman", Times, serif;\n    color: #000;\n  }\n  @page {\n    margin: 1.5cm;\n  }\n  .wrap {\n    width: 100%;\n    margin: 0;\n    float: none !important;\n  }\n  .no-print,\n  nav,\n  footer,\n  video,\n  audio,\n  object,\n  embed {\n    display: none;\n  }\n  .print {\n    display: block;\n  }\n  .page-break {\n    page-break-before: always;\n  }\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n  a:link:after,\n  a:visited:after {\n    content: " (" attr(href) ") ";\n  }\n  p a {\n    word-wrap: break-word;\n  }\n  q:after {\n    content: " (" attr(cite) ")";\n  }\n  a:after,\n  a[href^="javascript:"]:after,\n  a[href^="#"]:after {\n    content: "";\n  }\n  a[href]:after {\n    content: " (" attr(href) ")";\n  }\n  abbr[title]:after {\n    content: " (" attr(title) ")";\n  }\n  aside {\n    display: block;\n    page-break-before: always;\n  }\n  h1 {\n    font-size: 24pt;\n  }\n  h2 {\n    font-size: 18pt;\n    orphans: 3;\n    widows: 3;\n    page-break-after: avoid;\n  }\n  h3 {\n    font-size: 14pt;\n    orphans: 3;\n    widows: 3;\n    page-break-after: avoid;\n  }\n  img {\n    max-width: 100% !important;\n  }\n  p {\n    font-size: 12pt;\n    widows: 3;\n    orphans: 3;\n  }\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n  thead {\n    display: table-header-group /* h5bp.com/t */;\n  }\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n}\n',""])},function(n,e,t){e=n.exports=t(1)(!1);var o=t(16),r=o(t(17)),a=o(t(18)),i=o(t(19));e.push([n.i,".donation a {\n  text-decoration: none;\n  color: #fff;\n}\n.donation a:hover {\n  color: #ff0;\n}\n.donation .blur {\n  filter: blur(3px);\n}\n.donation .donate-list {\n  list-style: none;\n  list-style-type: none;\n  display: table;\n  margin: auto;\n  padding: 0;\n  transition: all 0.3s;\n  z-index: 1;\n  position: relative;\n}\n.donation .donate-list li {\n  float: left;\n  border-left: 1px solid #ddd;\n  border: 1px solid #ddd;\n  background-color: #fff;\n}\n.donation .donate-list li:first-child {\n  border-radius: 6px 0 0 6px;\n  border-right: 0;\n}\n.donation .donate-list li:last-child {\n  border-radius: 0 6px 6px 0;\n  border-left: 0;\n}\n.donation .donate-list li>button,\n.donation .donate-list li>a {\n  line-height: 999;\n  border-radius: 0;\n  height: 26px;\n  display: block;\n  width: 74px;\n  text-align: center;\n  background: no-repeat center center;\n  background-size: 45px;\n  transition: all 0.3s;\n  filter: grayscale(1);\n  padding: 0;\n  opacity: 0.6;\n}\n.donation .donate-list li>button:hover,\n.donation .donate-list li>a:hover {\n  background-color: rgba(204,217,220,0.5);\n  filter: grayscale(0);\n  opacity: 1;\n}\n#PayPal {\n  background-image: url("+r+");\n}\n#BTC {\n  background-image: url("+a+");\n}\n#LTC {\n  background-image: url("+i+");\n}\n#QRBox {\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  background-color: rgba(255,255,255,0.3);\n  display: none;\n  perspective: 400px;\n  position: relative;\n}\n#MainBox {\n  cursor: pointer;\n  position: absolute;\n  text-align: center;\n  width: 200px;\n  height: 200px;\n  left: calc(50% - 100px);\n  top: calc(50% - 100px);\n  background: #fff no-repeat center center;\n  background-size: 190px;\n  border-radius: 6px;\n  box-shadow: 0px 2px 7px rgba(0,0,0,0.3);\n  opacity: 0;\n  transition: all 1s ease-in-out;\n  transform-style: preserve-3d;\n  transform-origin: center center;\n  overflow: hidden;\n}\n#MainBox.showQR {\n  opacity: 1;\n  animation-name: showQR;\n  animation-duration: 3s;\n  animation-timing-function: ease-in-out;\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n}\n#MainBox.hideQR {\n  opacity: 1;\n  animation-name: hideQR;\n  animation-duration: 0.5s;\n  animation-timing-function: ease-in-out;\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n}\n[data-footnote] {\n  position: relative;\n  overflow: hidden;\n  text-transform: initial;\n}\n[data-footnote]:before,\n[data-footnote]:after {\n  position: absolute;\n  transition: all 0.3s;\n  transform: translate3d(-50%, 0, 0);\n  opacity: 0;\n  left: 37px;\n  z-index: 10;\n}\n[data-footnote]:before {\n  content: attr(data-footnote);\n  border-radius: 6px;\n  background-color: #2b2b2b;\n  color: #fff;\n  height: 26px;\n  line-height: 26px;\n  padding: 0 6px;\n  font-size: 12px;\n  white-space: nowrap;\n  top: -24px;\n  left: 37px;\n}\n[data-footnote]:after {\n  content: '';\n  border: 5px solid #2b2b2b;\n  border-color: #2b2b2b transparent transparent transparent;\n  top: 0;\n  left: 37px;\n}\n[data-footnote]:hover {\n  overflow: visible;\n}\n[data-footnote]:hover:before,\n[data-footnote]:hover:after {\n  opacity: 1;\n}\n[data-footnote]:hover:before,\n[data-footnote]:hover:after {\n  transform: translate3d(-50%, -7px, 0);\n}\n@-moz-keyframes showQR {\n  from {\n    transform: rotateX(90deg);\n  }\n  8% {\n    opacity: 1;\n    transform: rotateX(-60deg);\n  }\n  18% {\n    transform: rotateX(40deg);\n  }\n  34% {\n    transform: rotateX(-28deg);\n  }\n  44% {\n    transform: rotateX(18deg);\n  }\n  58% {\n    transform: rotateX(-12deg);\n  }\n  72% {\n    transform: rotateX(9deg);\n  }\n  88% {\n    transform: rotateX(-5deg);\n  }\n  96% {\n    transform: rotateX(2deg);\n  }\n}\n@-webkit-keyframes showQR {\n  from {\n    transform: rotateX(90deg);\n  }\n  8% {\n    opacity: 1;\n    transform: rotateX(-60deg);\n  }\n  18% {\n    transform: rotateX(40deg);\n  }\n  34% {\n    transform: rotateX(-28deg);\n  }\n  44% {\n    transform: rotateX(18deg);\n  }\n  58% {\n    transform: rotateX(-12deg);\n  }\n  72% {\n    transform: rotateX(9deg);\n  }\n  88% {\n    transform: rotateX(-5deg);\n  }\n  96% {\n    transform: rotateX(2deg);\n  }\n}\n@-o-keyframes showQR {\n  from {\n    transform: rotateX(90deg);\n  }\n  8% {\n    opacity: 1;\n    transform: rotateX(-60deg);\n  }\n  18% {\n    transform: rotateX(40deg);\n  }\n  34% {\n    transform: rotateX(-28deg);\n  }\n  44% {\n    transform: rotateX(18deg);\n  }\n  58% {\n    transform: rotateX(-12deg);\n  }\n  72% {\n    transform: rotateX(9deg);\n  }\n  88% {\n    transform: rotateX(-5deg);\n  }\n  96% {\n    transform: rotateX(2deg);\n  }\n}\n@keyframes showQR {\n  from {\n    transform: rotateX(90deg);\n  }\n  8% {\n    opacity: 1;\n    transform: rotateX(-60deg);\n  }\n  18% {\n    transform: rotateX(40deg);\n  }\n  34% {\n    transform: rotateX(-28deg);\n  }\n  44% {\n    transform: rotateX(18deg);\n  }\n  58% {\n    transform: rotateX(-12deg);\n  }\n  72% {\n    transform: rotateX(9deg);\n  }\n  88% {\n    transform: rotateX(-5deg);\n  }\n  96% {\n    transform: rotateX(2deg);\n  }\n}\n@-moz-keyframes hideQR {\n  20%, 50% {\n    transform: scale(1.08, 1.08);\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    transform: rotateZ(40deg) scale(0.6, 0.6);\n  }\n}\n@-webkit-keyframes hideQR {\n  20%, 50% {\n    transform: scale(1.08, 1.08);\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    transform: rotateZ(40deg) scale(0.6, 0.6);\n  }\n}\n@-o-keyframes hideQR {\n  20%, 50% {\n    transform: scale(1.08, 1.08);\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    transform: rotateZ(40deg) scale(0.6, 0.6);\n  }\n}\n@keyframes hideQR {\n  20%, 50% {\n    transform: scale(1.08, 1.08);\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    transform: rotateZ(40deg) scale(0.6, 0.6);\n  }\n}\n",""])},,,function(n,e,t){n.exports=t.p+"386a62f05bc173ef503483ec29bfdca8.png"},,,,function(e,n,t){var o=t(6);"string"==typeof o&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1},a=t(2)(o,r);o.locals&&(e.exports=o.locals),o.locals||e.hot.accept(6,function(){var n=t(6);"string"==typeof n&&(n=[[e.i,n,""]]),a(n)}),e.hot.dispose(function(){a()})},function(e,n,t){var o=t(7);"string"==typeof o&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1},a=t(2)(o,r);o.locals&&(e.exports=o.locals),o.locals||e.hot.accept(7,function(){var n=t(7);"string"==typeof n&&(n=[[e.i,n,""]]),a(n)}),e.hot.dispose(function(){a()})},,function(n,e,t){n.exports=t.p+"1364c01051f21b1d83b7d018d8c44ccb.svg"},function(n,e,t){n.exports=t.p+"d8df5272dd47d8ecf390a6ef1a5a8aa7.svg"},function(n,e,t){n.exports=t.p+"786d89b5e65cca29ceefa320c415aa16.svg"},,,,,,function(n,e,t){var o,r,a,i,d;o=window,r=document,a="ga",o.GoogleAnalyticsObject=a,o.ga=o.ga||function(){(o.ga.q=o.ga.q||[]).push(arguments)},o.ga.l=1*new Date,i=r.createElement("script"),d=r.getElementsByTagName("script")[0],i.async=1,i.src="https://www.google-analytics.com/analytics.js",d.parentNode.insertBefore(i,d),ga("create","UA-32351360-4","auto"),ga("send","pageview")},function(n,e,t){"use strict";t.r(e);var o,r;t(13),t(14);(r=o=o||{}).digits="digits",r.checker="checker";function d(n){for(var e=null,t=0;t<9;++t)e+=Number(n.toString().charAt(t))*(10-t);var o=e%11;return o<2?0:11-o}function s(n){for(var e=null,t=0;t<10;++t)e+=Number(n.toString().charAt(t))*(11-t);var o=e%11;return o<2?0:11-o}function a(n,e){var t=".",o="-";return"digits"===e?o=t="":"checker"===e&&(t="",o="-"),11<n.length?console.error("The value contains error. Has more than 11 digits."):n.length<11?console.error("The value contains error. Has fewer than 11 digits."):n.slice(0,3)+t+n.slice(3,6)+t+n.slice(6,9)+o+n.slice(9,11)}t(15);var i=t(4),c=t.n(i),l=t(0),f=t.n(l),p=t(10),u=t.n(p);f()(document).ready(function(){var t=f()("#QRBox"),o=f()("#MainBox");f()("#BTC,PayPal").click(function(n){var e=n.currentTarget.id;"function"==typeof window.ga&&window.ga("send","event","button","click",e),"BTC"===e&&(function(n){n&&o.attr("src",n),f()(".donate-list").addClass("blur"),t.fadeIn(300,function(){o.addClass("showQR")})}(u.a),new c.a("#BTC"))}),o.click(function(){o.removeClass("showQR").addClass("hideQR"),setTimeout(function(){t.fadeOut(300,function(){o.removeClass("hideQR")}),f()(".donate-list").removeClass("blur")},600)})});var m=new Date;document.getElementsByClassName("footer__year")[0].innerHTML=String(m.getFullYear());function g(n,e){n[0].className+=" "+e}function b(n,e){for(var t=" "+n[0].className+" ";-1!==t.indexOf(" "+e+" ");)t=t.replace(" "+e+" ","");n[0].className=t}function h(n,e,t){var o=document.getElementsByClassName(n);Array.from(o).forEach(function(n){n.addEventListener(t,e,!1)})}function y(){document.getElementsByClassName("generate-section__input--generated")[0].setAttribute("value",function(n){for(var e="",t=0;t<9;++t)e+=String(Math.floor(9*Math.random()));var o=d(e),r=e+o+s(e+o);return a(r,n)}()),"function"==typeof window.ga&&window.ga("send","event","button","click","Generate CPF")}function v(n){n.preventDefault();var e=document.getElementsByClassName("format-section__params")[0].value,t=document.getElementById("format-section__input").value;document.getElementsByClassName("format-section__input--message")[0].setAttribute("value",function(n,e){if(n){var t=String(n).replace(/[^\d]/g,"");return a(t,e)}}(t,e)),"function"==typeof window.ga&&window.ga("send","event","button","click","Formate CPF")}y(),h("generate-section__submit-button",y,"click"),h("validate-section__form",function(n){n.preventDefault();var e=function(n){if("string"!=typeof n&&"number"!=typeof n)return console.warn("Unsupported value"),!1;var e=String(n).replace(/\.|-|\s/g,""),t=e.substring(0,9),o=e.substring(9,11);if(11!==e.length)return!1;for(var r=0;r<10;r++)if(""+t+o===Array(12).join(String(r)))return!1;var a=d(t),i=s(""+t+a);return o.toString()===a.toString()+i.toString()}(document.getElementById("validate-section__input--to-format").value),t=document.getElementsByClassName("validate-section__input--message"),o=e?"CPF Válido":"CPF Inválido";e?(b(t,"validate-section__input--invalid"),g(t,"validate-section__input--valid")):(b(t,"validate-section__input--valid"),g(t,"validate-section__input--invalid")),t[0].setAttribute("value",o),"function"==typeof window.ga&&window.ga("send","event","button","click","Validate CPF")},"submit"),h("format-section__form",v,"submit"),h("format-section__form",v,"submit");t(20);var w=t(11),x=t.n(w),_=t(12),k=t.n(_);new c.a(".generate-section__copy-button, .format-section__copy-button");var O=document.getElementById("validate-section__input--to-format");new k.a("999.999.999-99").mask(O),x.a.initHighlightingOnLoad();t(25);n.hot.accept()}]);