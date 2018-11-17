/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"App\", function() { return App; });\n/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config/config.js */ \"./src/js/config/config.js\");\n/* harmony import */ var _services_news_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/news-api.js */ \"./src/js/services/news-api.js\");\n/* harmony import */ var _components_news_list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/news-list.js */ \"./src/js/components/news-list.js\");\n/* harmony import */ var _components_search_panel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/search-panel.js */ \"./src/js/components/search-panel.js\");\n\r\n\r\n\r\n\r\n\r\n/** The main application class */\r\nclass App {\r\n  constructor() {\r\n    this._sourcesConfig = new _config_config_js__WEBPACK_IMPORTED_MODULE_0__[\"SourcesConfig\"]();\r\n    this._newsApi = new _services_news_api_js__WEBPACK_IMPORTED_MODULE_1__[\"NewsAPI\"](_config_config_js__WEBPACK_IMPORTED_MODULE_0__[\"apiKey\"]);\r\n    this._searchPanel = new _components_search_panel_js__WEBPACK_IMPORTED_MODULE_3__[\"SearchPanel\"]({ sources: this._sourcesConfig.getSearchPanelOptions() });\r\n    this._newsList = new _components_news_list_js__WEBPACK_IMPORTED_MODULE_2__[\"NewsList\"](document.getElementById('newsListContainer'));\r\n    this._newsList.text = `Click 'Go' to get some news!`;\r\n    this._searchPanel.submitClick.subscribe(this.onSubmitClick.bind(this));\r\n  }\r\n\r\n  onSubmitClick({ source, page }) {\r\n    const { endpoint, params } = this._sourcesConfig.getUrlConfig(source);\r\n    this.loadNews(endpoint, { ...params, page });\r\n  }\r\n\r\n  async loadNews(endpoint, params) {\r\n    this._searchPanel.disableSubmit();\r\n    this._newsList.text = 'Loading...';\r\n\r\n    try {\r\n      const result = await this._newsApi.get(endpoint, params);\r\n      result && result.articles && result.articles.length\r\n        ? this._newsList.articles = result.articles\r\n        : this._newsList.text = `Nothing's found. Try changing the channel or page number.`;\r\n    } catch {\r\n      this._newsList.text = 'Oops, something went wrong. Maybe the page number is too big?';\r\n    } finally {\r\n      this._searchPanel.enableSubmit();\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/components/news-list.js":
/*!****************************************!*\
  !*** ./src/js/components/news-list.js ***!
  \****************************************/
/*! exports provided: NewsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NewsList\", function() { return NewsList; });\n/* harmony import */ var _core_utls_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/utls.js */ \"./src/js/core/utls.js\");\n/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config.js */ \"./src/js/config/config.js\");\n\r\n\r\n\r\n/** Displays the list of the news articles */\r\nclass NewsList {\r\n  constructor(containerEl) {\r\n    this._newsListContainer = containerEl;\r\n  }\r\n\r\n  set text(text) {\r\n    this.clear();\r\n    this._newsListContainer.append(text);\r\n  }\r\n\r\n  set articles(articles) {\r\n    this.clear();\r\n    this.add(articles);\r\n  }\r\n\r\n  clear() {\r\n    _core_utls_js__WEBPACK_IMPORTED_MODULE_0__[\"DOMHelper\"].removeAllChildren(this._newsListContainer);\r\n  }\r\n\r\n  add(articles) {\r\n    if (Object(_core_utls_js__WEBPACK_IMPORTED_MODULE_0__[\"isIterable\"])(articles)) {\r\n      this._newsListContainer.innerHTML = Array.from(articles, article => this._createCardEl(article)).join('');\r\n    }\r\n    document.querySelectorAll('.card-image img').forEach(image => image.onload = () => image.parentElement.classList.remove('loading'));\r\n  }\r\n\r\n  _createCardEl(article) {\r\n    return `\r\n      <div class=\"card\">\r\n        <a class=\"card-link\" href=\"${article.url}\" target=\"_blank\">\r\n          <div class=\"card-image loading\">\r\n            <img src=\"${article.urlToImage || _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"genericNewsLogoPath\"]}\" alt=\"${article.title}\">\r\n          </div>\r\n          <div class=\"card-text\">\r\n            <h3 class=\"card-title\" title=\"${article.title}\">${article.title}</h3>\r\n            <p class=\"card-description\" title=\"${article.description}\">${article.description}</p>\r\n            <div class=\"card-footer\">\r\n              <p class=\"card-date\">\r\n                <time title=\"${new Date(article.publishedAt).toLocaleString()}\">${new Date(article.publishedAt).toLocaleDateString()}</time>\r\n              </p>\r\n              <p class=\"card-source\" title=\"${article.source.name}\">${article.source.name}</p>\r\n            </div>\r\n          </div>\r\n        </a>\r\n      </div>\r\n    `;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/components/news-list.js?");

/***/ }),

/***/ "./src/js/components/search-panel.js":
/*!*******************************************!*\
  !*** ./src/js/components/search-panel.js ***!
  \*******************************************/
/*! exports provided: SearchPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SearchPanel\", function() { return SearchPanel; });\n/* harmony import */ var _core_utls_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/utls.js */ \"./src/js/core/utls.js\");\n/* harmony import */ var _core_event_emitter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/event-emitter.js */ \"./src/js/core/event-emitter.js\");\n\r\n\r\n\r\n/** Gets search parameters and emits an event when a user clicks submit button */\r\nclass SearchPanel {\r\n  constructor({ sources = [] } = {}) {\r\n    this._pageEl = document.getElementById('page');\r\n    this._pageElContainer = document.getElementById('pageContainer');\r\n    this._sourcesConfig = sources;\r\n    this._sourceEl = document.getElementById('source');\r\n    this._initSourceOptions(this._sourceEl, sources);\r\n    this._submitButton = document.getElementById('submit');\r\n    this._submitButton.addEventListener('click', this._onSubmitClick.bind(this));\r\n    this._submitClick = new _core_event_emitter_js__WEBPACK_IMPORTED_MODULE_1__[\"EventEmitter\"]();\r\n    this.enableSubmit();\r\n  }\r\n\r\n  get page() {\r\n    const page = this._pageEl && +this._pageEl.value || 1;\r\n    if (!Number.isInteger(page) || page < 1) {\r\n      throw new TypeError('The page must be a positive integer number');\r\n    }\r\n    return page;\r\n  }\r\n\r\n  get source() {\r\n    return this._sourceEl.value;\r\n  }\r\n\r\n  get submitClick() {\r\n    return this._submitClick;\r\n  }\r\n\r\n  dispose() {\r\n    this._pageEl.removeEventListener('click', this._onSubmitClick.bind(this));\r\n  }\r\n\r\n  disableSubmit() {\r\n    this._submitButton.setAttribute('disabled', '');\r\n  }\r\n\r\n  enableSubmit() {\r\n    this._submitButton.removeAttribute('disabled');\r\n  }\r\n\r\n  _initSourceOptions(sourceEl, sources) {\r\n    if (!sourceEl) {\r\n      throw new Error('Unable to find the source element');\r\n    }\r\n\r\n    _core_utls_js__WEBPACK_IMPORTED_MODULE_0__[\"DOMHelper\"].removeAllChildren(sourceEl);\r\n    sourceEl.innerHTML = sources.map(source => this._createOption(source)).join('');\r\n    this._setPageVisible();\r\n    sourceEl.addEventListener('change', () => this._setPageVisible());\r\n  }\r\n\r\n  get _isPaginationHidden() {\r\n    return this._sourcesConfig.find(s => s.value === this.source).isPaginationHidden;\r\n  }\r\n\r\n  _setPageVisible() {\r\n    this._isPaginationHidden ? this._hidePage() : this._showPage();\r\n  }\r\n\r\n  _hidePage() {\r\n    this._pageElContainer.setAttribute('hidden', '');\r\n  }\r\n\r\n  _showPage() {\r\n    this._pageElContainer.removeAttribute('hidden');\r\n  }\r\n\r\n  _createOption({ displayName, value }) {\r\n    return `<option value=\"${value}\">${displayName}</option>`;\r\n  }\r\n\r\n  _onSubmitClick() {\r\n    this.submitClick.emit({ source: this.source, page: this.page });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/components/search-panel.js?");

/***/ }),

/***/ "./src/js/config/config.js":
/*!*********************************!*\
  !*** ./src/js/config/config.js ***!
  \*********************************/
/*! exports provided: apiKey, genericNewsLogoPath, SourcesConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"apiKey\", function() { return apiKey; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"genericNewsLogoPath\", function() { return genericNewsLogoPath; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SourcesConfig\", function() { return SourcesConfig; });\nconst apiKey = 'd63e3d1d1622450aaf814fae749afce1';\r\nconst genericNewsLogoPath = './images/generic_news_logo.png';\r\n\r\nclass SourcesConfig {\r\n  constructor() {\r\n    this._sourcesConfig = new Map([\r\n      ['1', { displayName: 'Top headlines from BBC News', urlConfig: { endpoint: 'top-headlines', params: { sources: 'bbc-news' } }, isPaginationHidden: true }],\r\n      ['2', { displayName: 'Articles about Bitcoin', urlConfig: { endpoint: 'everything', params: { q: 'bitcoin' } } }],\r\n      ['3', { displayName: 'Top sports headlines', urlConfig: { endpoint: 'top-headlines', params: { category: 'sport' } } }],\r\n    ]);\r\n  }\r\n\r\n  getSearchPanelOptions() {\r\n    return Array.from(this._sourcesConfig, source => ({ value: source[0], displayName: source[1].displayName, isPaginationHidden: source[1].isPaginationHidden }));\r\n  }\r\n\r\n  getUrlConfig(sourceKey) {\r\n    return this._sourcesConfig.get(sourceKey).urlConfig;\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/js/config/config.js?");

/***/ }),

/***/ "./src/js/core/event-emitter.js":
/*!**************************************!*\
  !*** ./src/js/core/event-emitter.js ***!
  \**************************************/
/*! exports provided: EventEmitter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EventEmitter\", function() { return EventEmitter; });\n/* harmony import */ var _utls_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utls.js */ \"./src/js/core/utls.js\");\n\r\n\r\n/** Provides a layer of abstraction from the DOM events. */\r\nclass EventEmitter {\r\n  constructor() {\r\n    this._subscribers = [];\r\n  }\r\n\r\n  emit(value) {\r\n    this._subscribers.forEach(subscriber => subscriber(value));\r\n  }\r\n\r\n  /** The subscriber is invoked when the event is triggered. Returns Subscription to be able to unsubscribe from the event. */\r\n  subscribe(subscriber) {\r\n    if (!Object(_utls_js__WEBPACK_IMPORTED_MODULE_0__[\"isFunction\"])(subscriber)) {\r\n      throw new Error('Only functions are allowed as subscribers.');\r\n    }\r\n    const subscriptionIdx = this._subscribers.length;\r\n    this._subscribers = [...this._subscribers, subscriber];\r\n    const sink = new Subscription(() => this._subscribers = this._subscribers.filter((v, i) => i !== subscriptionIdx));\r\n    return sink;\r\n  }\r\n}\r\n\r\n/** Allows to unsubscribe from the event */\r\nclass Subscription {\r\n  constructor(unsubscribeFn) {\r\n    this._unsubscribeFn = unsubscribeFn;\r\n  }\r\n  unsubscribe() {\r\n    if (Object(_utls_js__WEBPACK_IMPORTED_MODULE_0__[\"isFunction\"])(this._unsubscribeFn)) {\r\n      this._unsubscribeFn();\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/core/event-emitter.js?");

/***/ }),

/***/ "./src/js/core/utls.js":
/*!*****************************!*\
  !*** ./src/js/core/utls.js ***!
  \*****************************/
/*! exports provided: isFunction, isIterable, DOMHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isFunction\", function() { return isFunction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isIterable\", function() { return isIterable; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DOMHelper\", function() { return DOMHelper; });\nfunction isFunction(x) {\r\n  return typeof x === 'function';\r\n}\r\n\r\nfunction isIterable(obj) {\r\n  return obj != null && typeof obj[Symbol.iterator] === 'function';\r\n}\r\n\r\nclass DOMHelper {\r\n  static removeAllChildren(node) {\r\n    while (node.firstChild) {\r\n      node.removeChild(node.firstChild);\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/core/utls.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ \"./src/js/app.js\");\n\r\n\r\n/** Initialize the application here */\r\ndocument.addEventListener('DOMContentLoaded', () => new _app_js__WEBPACK_IMPORTED_MODULE_0__[\"App\"]());\r\n\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/services/news-api.js":
/*!*************************************!*\
  !*** ./src/js/services/news-api.js ***!
  \*************************************/
/*! exports provided: NewsAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NewsAPI\", function() { return NewsAPI; });\nconst host = 'https://newsapi.org';\r\n\r\n/** Fetches the news data from the web */\r\nclass NewsAPI {\r\n  constructor(apiKey) {\r\n    if (!apiKey) throw new Error('No API key specified');\r\n    this._apiKey = apiKey;\r\n  }\r\n\r\n  async get(endpoint, params) {\r\n    const url = this._buildUrl(`/v2/${endpoint}`, params);\r\n    return await this._getDataFromWeb(url, this._apiKey);\r\n  }\r\n\r\n  _buildUrl(endpoint, params) {\r\n    const queryParams = Object.keys(params).map(key => `${key}=${params[key]}`).join('&');\r\n    const baseURL = `${host}${endpoint}`;\r\n    return queryParams ? `${baseURL}?${queryParams}` : baseURL;\r\n  }\r\n\r\n  async _getDataFromWeb(url, apiKey) {\r\n    const headers = apiKey ? { 'x-api-key': apiKey } : {};\r\n    const response = await fetch(url, { headers });\r\n    const body = await response.json();\r\n    if (body.status === 'error') {\r\n      throw new NewsAPIError(body);\r\n    }\r\n    return body;\r\n  }\r\n}\r\n\r\nclass NewsAPIError extends Error {\r\n  constructor(err) {\r\n    super();\r\n    this.name = `NewsAPIError: ${err.code}`;\r\n    this.message = err.message;\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/js/services/news-api.js?");

/***/ })

/******/ });