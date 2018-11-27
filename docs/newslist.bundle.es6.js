(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["newslist"],{

/***/ "./src/app/components/news-list/news-list.js":
/*!***************************************************!*\
  !*** ./src/app/components/news-list/news-list.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NewsList; });\n/* harmony import */ var _core_utls_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/utls.js */ \"./src/app/core/utls.js\");\n/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/config.js */ \"./src/app/config/config.js\");\n/* harmony import */ var _news_list_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./news-list.scss */ \"./src/app/components/news-list/news-list.scss\");\n/* harmony import */ var _news_list_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_news_list_scss__WEBPACK_IMPORTED_MODULE_2__);\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n/** Displays the list of the news articles */\n\nclass NewsList {\n  constructor(containerEl) {\n    _defineProperty(this, \"_newsListContainer\", void 0);\n\n    this._newsListContainer = containerEl;\n    this.text = `Click 'Go' to get some news!`;\n  }\n\n  set text(text) {\n    this.clear();\n\n    this._newsListContainer.append(text);\n  }\n\n  set articles(articles) {\n    this.clear();\n    this.add(articles);\n  }\n\n  clear() {\n    _core_utls_js__WEBPACK_IMPORTED_MODULE_0__[\"DOMHelper\"].removeAllChildren(this._newsListContainer);\n  }\n\n  add(articles) {\n    if (Object(_core_utls_js__WEBPACK_IMPORTED_MODULE_0__[\"isIterable\"])(articles)) {\n      this._newsListContainer.innerHTML = Array.from(articles, article => this._createCardEl(article)).join('');\n    }\n\n    Array.from(document.querySelectorAll('.card-image img')).forEach(image => image.onload = () => image.parentElement.classList.remove('loading'));\n  }\n\n  _createCardEl(article) {\n    return `\n      <div class=\"card\">\n        <a class=\"card-link\" href=\"${article.url}\" target=\"_blank\">\n          <div class=\"card-image loading\">\n            <img src=\"${article.urlToImage || _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"genericNewsLogoPath\"]}\" alt=\"${article.title}\">\n          </div>\n          <div class=\"card-text\">\n            <h3 class=\"card-title\" title=\"${article.title}\">${article.title}</h3>\n            <p class=\"card-description\" title=\"${article.description || ''}\">${article.description || ''}</p>\n            <div class=\"card-footer\">\n              <p class=\"card-date\">\n                <time title=\"${new Date(article.publishedAt).toLocaleString()}\">${new Date(article.publishedAt).toLocaleDateString()}</time>\n              </p>\n              <p class=\"card-source\" title=\"${article.source.name}\">${article.source.name}</p>\n            </div>\n          </div>\n        </a>\n      </div>\n    `;\n  }\n\n}\n\n//# sourceURL=webpack:///./src/app/components/news-list/news-list.js?");

/***/ }),

/***/ "./src/app/components/news-list/news-list.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/news-list/news-list.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/app/components/news-list/news-list.scss?");

/***/ })

}]);