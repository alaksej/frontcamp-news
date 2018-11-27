/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
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
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		"main": 0
/******/ 	}
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"newslist":"newslist"}[chunkId]||chunkId) + ".bundle.es6.js"
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
/******/ 		// mini-css-extract-plugin CSS loading
/******/ 		var cssChunks = {"newslist":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "" + ({"newslist":"newslist"}[chunkId]||chunkId) + ".css";
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");
/******/ 				for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
/******/ 				}
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if(dataHref === href || dataHref === fullhref) return resolve();
/******/ 				}
/******/ 				var linkTag = document.createElement("link");
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				linkTag.onload = resolve;
/******/ 				linkTag.onerror = function(event) {
/******/ 					var request = event && event.target && event.target.src || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
/******/ 					err.request = request;
/******/ 					delete installedCssChunks[chunkId]
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				};
/******/ 				linkTag.href = fullhref;
/******/ 				var head = document.getElementsByTagName("head")[0];
/******/ 				head.appendChild(linkTag);
/******/ 			}).then(function() {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}));
/******/ 		}
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
/******/ 				var head = document.getElementsByTagName('head')[0];
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
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
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
/******/ 				head.appendChild(script);
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/app.js":
/*!************************!*\
  !*** ./src/app/app.js ***!
  \************************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"App\", function() { return App; });\n/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config/config.js */ \"./src/app/config/config.js\");\n/* harmony import */ var _services_news_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/news-api.js */ \"./src/app/services/news-api.js\");\n/* harmony import */ var _components_search_panel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/search-panel.js */ \"./src/app/components/search-panel.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n/** The main application class */\n\nclass App {\n  constructor() {\n    _defineProperty(this, \"_sourcesConfig\", new _config_config_js__WEBPACK_IMPORTED_MODULE_0__[\"SourcesConfig\"]());\n\n    _defineProperty(this, \"_newsApi\", new _services_news_api_js__WEBPACK_IMPORTED_MODULE_1__[\"NewsAPI\"](_config_config_js__WEBPACK_IMPORTED_MODULE_0__[\"apiKey\"]));\n\n    _defineProperty(this, \"_searchPanel\", new _components_search_panel_js__WEBPACK_IMPORTED_MODULE_2__[\"SearchPanel\"]({\n      sources: this._sourcesConfig.getSearchPanelOptions()\n    }));\n\n    _defineProperty(this, \"_newsList\", void 0);\n\n    this._searchPanel.submitClick.subscribe(this.onSubmitClick.bind(this));\n  }\n\n  onSubmitClick(_ref) {\n    let source = _ref.source,\n        page = _ref.page;\n\n    const _this$_sourcesConfig$ = this._sourcesConfig.getUrlConfig(source),\n          endpoint = _this$_sourcesConfig$.endpoint,\n          params = _this$_sourcesConfig$.params;\n\n    this.loadNews(endpoint, _objectSpread({}, params, {\n      page\n    }));\n  }\n\n  async loadNews(endpoint, params) {\n    if (!this._newsList) {\n      const _ref2 = await __webpack_require__.e(/*! import() | newslist */ \"newslist\").then(__webpack_require__.bind(null, /*! ./components/news-list/news-list.js */ \"./src/app/components/news-list/news-list.js\")),\n            NewsList = _ref2.default;\n\n      this._newsList = new NewsList(document.getElementById('newsListContainer'));\n    }\n\n    this._searchPanel.disableSubmit();\n\n    this._newsList.text = 'Loading...';\n\n    try {\n      const result = await this._newsApi.get(endpoint, params);\n      result && result.articles && result.articles.length ? this._newsList.articles = result.articles : this._newsList.text = `Nothing's found. Try changing the channel or page number.`;\n    } catch (e) {\n      console.log(e);\n      this._newsList.text = 'Oops, something went wrong. Maybe the page number is too big?';\n    } finally {\n      this._searchPanel.enableSubmit();\n    }\n  }\n\n}\n\n//# sourceURL=webpack:///./src/app/app.js?");

/***/ }),

/***/ "./src/app/components/search-panel.js":
/*!********************************************!*\
  !*** ./src/app/components/search-panel.js ***!
  \********************************************/
/*! exports provided: SearchPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SearchPanel\", function() { return SearchPanel; });\n/* harmony import */ var _core_utls_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/utls.js */ \"./src/app/core/utls.js\");\n/* harmony import */ var _core_event_emitter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/event-emitter.js */ \"./src/app/core/event-emitter.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n/** Gets search parameters and emits an event when a user clicks submit button */\n\nclass SearchPanel {\n  constructor() {\n    let _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n        _ref$sources = _ref.sources,\n        sources = _ref$sources === void 0 ? [] : _ref$sources;\n\n    _defineProperty(this, \"_pageEl\", document.getElementById('page'));\n\n    _defineProperty(this, \"_pageElContainer\", document.getElementById('pageContainer'));\n\n    _defineProperty(this, \"_sourceEl\", document.getElementById('source'));\n\n    _defineProperty(this, \"_submitButton\", document.getElementById('submit'));\n\n    _defineProperty(this, \"_submitClick\", new _core_event_emitter_js__WEBPACK_IMPORTED_MODULE_1__[\"EventEmitter\"]());\n\n    _defineProperty(this, \"_sourcesConfig\", void 0);\n\n    this._sourcesConfig = sources;\n\n    this._initSourceOptions(this._sourceEl, sources);\n\n    this._submitButton.addEventListener('click', this._onSubmitClick.bind(this));\n\n    this.enableSubmit();\n  }\n\n  get page() {\n    const page = !this._isPaginationHidden && this._pageEl && +this._pageEl.value || 1;\n\n    if (!Number.isInteger(page) || page < 1) {\n      throw new TypeError('The page must be a positive integer number');\n    }\n\n    return page;\n  }\n\n  get source() {\n    return this._sourceEl.value;\n  }\n\n  get submitClick() {\n    return this._submitClick;\n  }\n\n  dispose() {\n    this._pageEl.removeEventListener('click', this._onSubmitClick.bind(this));\n  }\n\n  disableSubmit() {\n    this._submitButton.setAttribute('disabled', '');\n  }\n\n  enableSubmit() {\n    this._submitButton.removeAttribute('disabled');\n  }\n\n  _initSourceOptions(sourceEl, sources) {\n    if (!sourceEl) {\n      throw new Error('Unable to find the source element');\n    }\n\n    _core_utls_js__WEBPACK_IMPORTED_MODULE_0__[\"DOMHelper\"].removeAllChildren(sourceEl);\n    sourceEl.innerHTML = sources.map(source => this._createOption(source)).join('');\n\n    this._setPageVisible();\n\n    sourceEl.addEventListener('change', () => this._setPageVisible());\n  }\n\n  get _isPaginationHidden() {\n    return this._sourcesConfig.find(s => s.value === this.source).isPaginationHidden;\n  }\n\n  _setPageVisible() {\n    this._isPaginationHidden ? this._hidePage() : this._showPage();\n  }\n\n  _hidePage() {\n    this._pageElContainer.setAttribute('hidden', '');\n  }\n\n  _showPage() {\n    this._pageElContainer.removeAttribute('hidden');\n  }\n\n  _createOption(_ref2) {\n    let displayName = _ref2.displayName,\n        value = _ref2.value;\n    return `<option value=\"${value}\">${displayName}</option>`;\n  }\n\n  _onSubmitClick() {\n    this.submitClick.emit({\n      source: this.source,\n      page: this.page\n    });\n  }\n\n}\n\n//# sourceURL=webpack:///./src/app/components/search-panel.js?");

/***/ }),

/***/ "./src/app/config/config.js":
/*!**********************************!*\
  !*** ./src/app/config/config.js ***!
  \**********************************/
/*! exports provided: apiKey, genericNewsLogoPath, SourcesConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"apiKey\", function() { return apiKey; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"genericNewsLogoPath\", function() { return genericNewsLogoPath; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SourcesConfig\", function() { return SourcesConfig; });\n/* harmony import */ var _images_generic_news_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images/generic_news_logo.png */ \"./src/images/generic_news_logo.png\");\n/* harmony import */ var _images_generic_news_logo_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_images_generic_news_logo_png__WEBPACK_IMPORTED_MODULE_0__);\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst apiKey = 'd63e3d1d1622450aaf814fae749afce1';\nconst genericNewsLogoPath = _images_generic_news_logo_png__WEBPACK_IMPORTED_MODULE_0___default.a;\nclass SourcesConfig {\n  constructor() {\n    _defineProperty(this, \"_sourcesConfig\", new Map([['1', {\n      displayName: 'Top headlines from BBC News',\n      urlConfig: {\n        endpoint: 'top-headlines',\n        params: {\n          sources: 'bbc-news'\n        }\n      },\n      isPaginationHidden: true\n    }], ['2', {\n      displayName: 'Articles about Bitcoin',\n      urlConfig: {\n        endpoint: 'everything',\n        params: {\n          q: 'bitcoin'\n        }\n      }\n    }], ['3', {\n      displayName: 'Top sports headlines',\n      urlConfig: {\n        endpoint: 'top-headlines',\n        params: {\n          category: 'sport'\n        }\n      }\n    }]]));\n  }\n\n  getSearchPanelOptions() {\n    return Array.from(this._sourcesConfig, source => ({\n      value: source[0],\n      displayName: source[1].displayName,\n      isPaginationHidden: source[1].isPaginationHidden\n    }));\n  }\n\n  getUrlConfig(sourceKey) {\n    return this._sourcesConfig.get(sourceKey).urlConfig;\n  }\n\n}\n\n//# sourceURL=webpack:///./src/app/config/config.js?");

/***/ }),

/***/ "./src/app/core/event-emitter.js":
/*!***************************************!*\
  !*** ./src/app/core/event-emitter.js ***!
  \***************************************/
/*! exports provided: EventEmitter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EventEmitter\", function() { return EventEmitter; });\n/* harmony import */ var _utls_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utls.js */ \"./src/app/core/utls.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n/** Provides a layer of abstraction from the DOM events. */\n\nclass EventEmitter {\n  constructor() {\n    _defineProperty(this, \"_subscribers\", []);\n  }\n\n  emit(value) {\n    this._subscribers.forEach(subscriber => subscriber(value));\n  }\n  /** The subscriber is invoked when the event is triggered. Returns Subscription to be able to unsubscribe from the event. */\n\n\n  subscribe(subscriber) {\n    if (!Object(_utls_js__WEBPACK_IMPORTED_MODULE_0__[\"isFunction\"])(subscriber)) {\n      throw new Error('Only functions are allowed as subscribers.');\n    }\n\n    const subscriptionIdx = this._subscribers.length;\n    this._subscribers = [...this._subscribers, subscriber];\n    const sink = new Subscription(() => this._subscribers = this._subscribers.filter((v, i) => i !== subscriptionIdx));\n    return sink;\n  }\n\n}\n/** Allows to unsubscribe from the event */\n\nclass Subscription {\n  constructor(unsubscribeFn) {\n    this._unsubscribeFn = unsubscribeFn;\n  }\n\n  unsubscribe() {\n    if (Object(_utls_js__WEBPACK_IMPORTED_MODULE_0__[\"isFunction\"])(this._unsubscribeFn)) {\n      this._unsubscribeFn();\n    }\n  }\n\n}\n\n//# sourceURL=webpack:///./src/app/core/event-emitter.js?");

/***/ }),

/***/ "./src/app/core/utls.js":
/*!******************************!*\
  !*** ./src/app/core/utls.js ***!
  \******************************/
/*! exports provided: isFunction, isIterable, DOMHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isFunction\", function() { return isFunction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isIterable\", function() { return isIterable; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DOMHelper\", function() { return DOMHelper; });\nfunction isFunction(x) {\n  return typeof x === 'function';\n}\nfunction isIterable(obj) {\n  return obj != null && typeof obj[Symbol.iterator] === 'function';\n}\nclass DOMHelper {\n  static removeAllChildren(node) {\n    while (node.firstChild) {\n      node.removeChild(node.firstChild);\n    }\n  }\n\n}\n\n//# sourceURL=webpack:///./src/app/core/utls.js?");

/***/ }),

/***/ "./src/app/main.js":
/*!*************************!*\
  !*** ./src/app/main.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ \"./src/app/app.js\");\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/main.scss */ \"./src/styles/main.scss\");\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _custom_loader_testing_custom_loader_test_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../custom-loader-testing/custom-loader-test.json */ \"./src/custom-loader-testing/custom-loader-test.json\");\nvar _custom_loader_testing_custom_loader_test_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../custom-loader-testing/custom-loader-test.json */ \"./src/custom-loader-testing/custom-loader-test.json\", 1);\n\n\n\nconsole.log({\n  json: _custom_loader_testing_custom_loader_test_json__WEBPACK_IMPORTED_MODULE_2__\n});\n/** Initialize the application here */\n\ndocument.addEventListener('DOMContentLoaded', () => new _app_js__WEBPACK_IMPORTED_MODULE_0__[\"App\"]());\n\n//# sourceURL=webpack:///./src/app/main.js?");

/***/ }),

/***/ "./src/app/services/news-api.js":
/*!**************************************!*\
  !*** ./src/app/services/news-api.js ***!
  \**************************************/
/*! exports provided: NewsAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NewsAPI\", function() { return NewsAPI; });\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst host = 'https://newsapi.org';\n/** Fetches the news data from the web */\n\nclass NewsAPI {\n  constructor(apiKey) {\n    _defineProperty(this, \"_apiKey\", void 0);\n\n    if (!apiKey) throw new Error('No API key specified');\n    this._apiKey = apiKey;\n  }\n\n  async get(endpoint, params) {\n    const url = this._buildUrl(`/v2/${endpoint}`, params);\n\n    return await this._getDataFromWeb(url, this._apiKey);\n  }\n\n  _buildUrl(endpoint, params) {\n    const queryParams = Object.keys(params).map(key => `${key}=${params[key]}`).join('&');\n    const baseURL = `${host}${endpoint}`;\n    return queryParams ? `${baseURL}?${queryParams}` : baseURL;\n  }\n\n  async _getDataFromWeb(url, apiKey) {\n    const headers = apiKey ? {\n      'x-api-key': apiKey\n    } : {};\n    const response = await fetch(url, {\n      headers\n    });\n    const body = await response.json();\n\n    if (body.status === 'error') {\n      throw new NewsAPIError(body);\n    }\n\n    return body;\n  }\n\n}\n\nclass NewsAPIError extends Error {\n  constructor(err) {\n    super();\n    this.name = `NewsAPIError: ${err.code}`;\n    this.message = err.message;\n  }\n\n}\n\n//# sourceURL=webpack:///./src/app/services/news-api.js?");

/***/ }),

/***/ "./src/custom-loader-testing/custom-loader-test.json":
/*!***********************************************************!*\
  !*** ./src/custom-loader-testing/custom-loader-test.json ***!
  \***********************************************************/
/*! exports provided: greeting, name, passport, addresses, default */
/***/ (function(module) {

eval("module.exports = {\"greeting\":\"Hi there\",\"name\":\"Alex\",\"passport\":1234567890,\"addresses\":[{\"city\":\"Minsk\",\"street\":\"Tirazhnaya\",\"building\":150},{\"city\":\"Gomel\",\"building\":3,\"street\":\"Tranzitnaya\"}]};\n\n//# sourceURL=webpack:///./src/custom-loader-testing/custom-loader-test.json?");

/***/ }),

/***/ "./src/images/generic_news_logo.png":
/*!******************************************!*\
  !*** ./src/images/generic_news_logo.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"f638f752f44fd1d2a7e732e15b366084.png\";\n\n//# sourceURL=webpack:///./src/images/generic_news_logo.png?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles/main.scss?");

/***/ })

/******/ });