"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = void 0;

var _config = require("./config/config.js");

var _newsApi = require("./services/news-api.js");

var _newsList = require("./components/news-list.js");

var _searchPanel = require("./components/search-panel.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/** The main application class */
var App =
/*#__PURE__*/
function () {
  function App() {
    _classCallCheck(this, App);

    this._sourcesConfig = new _config.SourcesConfig();
    this._newsApi = new _newsApi.NewsAPI(_config.apiKey);
    this._searchPanel = new _searchPanel.SearchPanel({
      sources: this._sourcesConfig.getSearchPanelOptions()
    });
    this._newsList = new _newsList.NewsList(document.getElementById('newsListContainer'));
    this._newsList.text = "Click 'Go' to get some news!";

    this._searchPanel.submitClick.subscribe(this.onSubmitClick.bind(this));
  }

  _createClass(App, [{
    key: "onSubmitClick",
    value: function onSubmitClick(_ref) {
      var source = _ref.source,
          page = _ref.page;

      var _this$_sourcesConfig$ = this._sourcesConfig.getUrlConfig(source),
          endpoint = _this$_sourcesConfig$.endpoint,
          params = _this$_sourcesConfig$.params;

      this.loadNews(endpoint, _objectSpread({}, params, {
        page: page
      }));
    }
  }, {
    key: "loadNews",
    value: function () {
      var _loadNews = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(endpoint, params) {
        var result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this._searchPanel.disableSubmit();

                this._newsList.text = 'Loading...';
                _context.prev = 2;
                _context.next = 5;
                return this._newsApi.get(endpoint, params);

              case 5:
                result = _context.sent;
                result && result.articles && result.articles.length ? this._newsList.articles = result.articles : this._newsList.text = "Nothing's found. Try changing the channel or page number.";
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](2);
                this._newsList.text = 'Oops, something went wrong. Maybe the page number is too big?';

              case 12:
                _context.prev = 12;

                this._searchPanel.enableSubmit();

                return _context.finish(12);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 9, 12, 15]]);
      }));

      return function loadNews(_x, _x2) {
        return _loadNews.apply(this, arguments);
      };
    }()
  }]);

  return App;
}();

exports.App = App;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewsList = void 0;

var _utls = require("../core/utls.js");

var _config = require("../config/config.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/** Displays the list of the news articles */
var NewsList =
/*#__PURE__*/
function () {
  function NewsList(containerEl) {
    _classCallCheck(this, NewsList);

    this._newsListContainer = containerEl;
  }

  _createClass(NewsList, [{
    key: "clear",
    value: function clear() {
      _utls.DOMHelper.removeAllChildren(this._newsListContainer);
    }
  }, {
    key: "add",
    value: function add(articles) {
      var _this = this;

      if ((0, _utls.isIterable)(articles)) {
        this._newsListContainer.innerHTML = Array.from(articles, function (article) {
          return _this._createCardEl(article);
        }).join('');
      }

      document.querySelectorAll('.card-image img').forEach(function (image) {
        return image.onload = function () {
          return image.parentElement.classList.remove('loading');
        };
      });
    }
  }, {
    key: "_createCardEl",
    value: function _createCardEl(article) {
      return "\n      <div class=\"card\">\n        <a class=\"card-link\" href=\"".concat(article.url, "\" target=\"_blank\">\n          <div class=\"card-image loading\">\n            <img src=\"").concat(article.urlToImage || _config.genericNewsLogoPath, "\" alt=\"").concat(article.title, "\">\n          </div>\n          <div class=\"card-text\">\n            <h3 class=\"card-title\" title=\"").concat(article.title, "\">").concat(article.title, "</h3>\n            <p class=\"card-description\" title=\"").concat(article.description, "\">").concat(article.description, "</p>\n            <div class=\"card-footer\">\n              <p class=\"card-date\">\n                <time title=\"").concat(new Date(article.publishedAt).toLocaleString(), "\">").concat(new Date(article.publishedAt).toLocaleDateString(), "</time>\n              </p>\n              <p class=\"card-source\" title=\"").concat(article.source.name, "\">").concat(article.source.name, "</p>\n            </div>\n          </div>\n        </a>\n      </div>\n    ");
    }
  }, {
    key: "text",
    set: function set(text) {
      this.clear();

      this._newsListContainer.append(text);
    }
  }, {
    key: "articles",
    set: function set(articles) {
      this.clear();
      this.add(articles);
    }
  }]);

  return NewsList;
}();

exports.NewsList = NewsList;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchPanel = void 0;

var _utls = require("../core/utls.js");

var _eventEmitter = require("../core/event-emitter.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/** Gets search parameters and emits an event when a user clicks submit button */
var SearchPanel =
/*#__PURE__*/
function () {
  function SearchPanel() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$sources = _ref.sources,
        sources = _ref$sources === void 0 ? [] : _ref$sources;

    _classCallCheck(this, SearchPanel);

    this._pageEl = document.getElementById('page');
    this._pageElContainer = document.getElementById('pageContainer');
    this._sourcesConfig = sources;
    this._sourceEl = document.getElementById('source');

    this._initSourceOptions(this._sourceEl, sources);

    this._submitButton = document.getElementById('submit');

    this._submitButton.addEventListener('click', this._onSubmitClick.bind(this));

    this._submitClick = new _eventEmitter.EventEmitter();
    this.enableSubmit();
  }

  _createClass(SearchPanel, [{
    key: "dispose",
    value: function dispose() {
      this._pageEl.removeEventListener('click', this._onSubmitClick.bind(this));
    }
  }, {
    key: "disableSubmit",
    value: function disableSubmit() {
      this._submitButton.setAttribute('disabled', '');
    }
  }, {
    key: "enableSubmit",
    value: function enableSubmit() {
      this._submitButton.removeAttribute('disabled');
    }
  }, {
    key: "_initSourceOptions",
    value: function _initSourceOptions(sourceEl, sources) {
      var _this = this;

      if (!sourceEl) {
        throw new Error('Unable to find the source element');
      }

      _utls.DOMHelper.removeAllChildren(sourceEl);

      sourceEl.innerHTML = sources.map(function (source) {
        return _this._createOption(source);
      }).join('');

      this._setPageVisible();

      sourceEl.addEventListener('change', function () {
        return _this._setPageVisible();
      });
    }
  }, {
    key: "_setPageVisible",
    value: function _setPageVisible() {
      this._isPaginationHidden ? this._hidePage() : this._showPage();
    }
  }, {
    key: "_hidePage",
    value: function _hidePage() {
      this._pageElContainer.setAttribute('hidden', '');
    }
  }, {
    key: "_showPage",
    value: function _showPage() {
      this._pageElContainer.removeAttribute('hidden');
    }
  }, {
    key: "_createOption",
    value: function _createOption(_ref2) {
      var displayName = _ref2.displayName,
          value = _ref2.value;
      return "<option value=\"".concat(value, "\">").concat(displayName, "</option>");
    }
  }, {
    key: "_onSubmitClick",
    value: function _onSubmitClick() {
      this.submitClick.emit({
        source: this.source,
        page: this.page
      });
    }
  }, {
    key: "page",
    get: function get() {
      var page = this._pageEl && +this._pageEl.value || 1;

      if (!Number.isInteger(page) || page < 1) {
        throw new TypeError('The page must be a positive integer number');
      }

      return page;
    }
  }, {
    key: "source",
    get: function get() {
      return this._sourceEl.value;
    }
  }, {
    key: "submitClick",
    get: function get() {
      return this._submitClick;
    }
  }, {
    key: "_isPaginationHidden",
    get: function get() {
      var _this2 = this;

      return this._sourcesConfig.find(function (s) {
        return s.value === _this2.source;
      }).isPaginationHidden;
    }
  }]);

  return SearchPanel;
}();

exports.SearchPanel = SearchPanel;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SourcesConfig = exports.genericNewsLogoPath = exports.apiKey = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var apiKey = 'd63e3d1d1622450aaf814fae749afce1';
exports.apiKey = apiKey;
var genericNewsLogoPath = './images/generic_news_logo.png';
exports.genericNewsLogoPath = genericNewsLogoPath;

var SourcesConfig =
/*#__PURE__*/
function () {
  function SourcesConfig() {
    _classCallCheck(this, SourcesConfig);

    this._sourcesConfig = new Map([['1', {
      displayName: 'Top headlines from BBC News',
      urlConfig: {
        endpoint: 'top-headlines',
        params: {
          sources: 'bbc-news'
        }
      },
      isPaginationHidden: true
    }], ['2', {
      displayName: 'Articles about Bitcoin',
      urlConfig: {
        endpoint: 'everything',
        params: {
          q: 'bitcoin'
        }
      }
    }], ['3', {
      displayName: 'Top sports headlines',
      urlConfig: {
        endpoint: 'top-headlines',
        params: {
          category: 'sport'
        }
      }
    }]]);
  }

  _createClass(SourcesConfig, [{
    key: "getSearchPanelOptions",
    value: function getSearchPanelOptions() {
      return Array.from(this._sourcesConfig, function (source) {
        return {
          value: source[0],
          displayName: source[1].displayName,
          isPaginationHidden: source[1].isPaginationHidden
        };
      });
    }
  }, {
    key: "getUrlConfig",
    value: function getUrlConfig(sourceKey) {
      return this._sourcesConfig.get(sourceKey).urlConfig;
    }
  }]);

  return SourcesConfig;
}();

exports.SourcesConfig = SourcesConfig;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventEmitter = void 0;

var _utls = require("./utls.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/** Provides a layer of abstraction from the DOM events. */
var EventEmitter =
/*#__PURE__*/
function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    this._subscribers = [];
  }

  _createClass(EventEmitter, [{
    key: "emit",
    value: function emit(value) {
      this._subscribers.forEach(function (subscriber) {
        return subscriber(value);
      });
    }
    /** The subscriber is invoked when the event is triggered. Returns Subscription to be able to unsubscribe from the event. */

  }, {
    key: "subscribe",
    value: function subscribe(subscriber) {
      var _this = this;

      if (!(0, _utls.isFunction)(subscriber)) {
        throw new Error('Only functions are allowed as subscribers.');
      }

      var subscriptionIdx = this._subscribers.length;
      this._subscribers = _toConsumableArray(this._subscribers).concat([subscriber]);
      var sink = new Subscription(function () {
        return _this._subscribers = _this._subscribers.filter(function (v, i) {
          return i !== subscriptionIdx;
        });
      });
      return sink;
    }
  }]);

  return EventEmitter;
}();
/** Allows to unsubscribe from the event */


exports.EventEmitter = EventEmitter;

var Subscription =
/*#__PURE__*/
function () {
  function Subscription(unsubscribeFn) {
    _classCallCheck(this, Subscription);

    this._unsubscribeFn = unsubscribeFn;
  }

  _createClass(Subscription, [{
    key: "unsubscribe",
    value: function unsubscribe() {
      if ((0, _utls.isFunction)(this._unsubscribeFn)) {
        this._unsubscribeFn();
      }
    }
  }]);

  return Subscription;
}();
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFunction = isFunction;
exports.isIterable = isIterable;
exports.DOMHelper = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function isFunction(x) {
  return typeof x === 'function';
}

function isIterable(obj) {
  return obj != null && typeof obj[Symbol.iterator] === 'function';
}

var DOMHelper =
/*#__PURE__*/
function () {
  function DOMHelper() {
    _classCallCheck(this, DOMHelper);
  }

  _createClass(DOMHelper, null, [{
    key: "removeAllChildren",
    value: function removeAllChildren(node) {
      while (node.firstChild) {
        node.removeChild(node.firstChild);
      }
    }
  }]);

  return DOMHelper;
}();

exports.DOMHelper = DOMHelper;
"use strict";

var _app = require("./app.js");

/** Initialize the application here */
document.addEventListener('DOMContentLoaded', function () {
  return new _app.App();
});
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewsAPI = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var host = 'https://newsapi.org';
/** Fetches the news data from the web */

var NewsAPI =
/*#__PURE__*/
function () {
  function NewsAPI(apiKey) {
    _classCallCheck(this, NewsAPI);

    if (!apiKey) throw new Error('No API key specified');
    this._apiKey = apiKey;
  }

  _createClass(NewsAPI, [{
    key: "get",
    value: function () {
      var _get = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(endpoint, params) {
        var url;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = this._buildUrl("/v2/".concat(endpoint), params);
                _context.next = 3;
                return this._getDataFromWeb(url, this._apiKey);

              case 3:
                return _context.abrupt("return", _context.sent);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function get(_x, _x2) {
        return _get.apply(this, arguments);
      };
    }()
  }, {
    key: "_buildUrl",
    value: function _buildUrl(endpoint, params) {
      var queryParams = Object.keys(params).map(function (key) {
        return "".concat(key, "=").concat(params[key]);
      }).join('&');
      var baseURL = "".concat(host).concat(endpoint);
      return queryParams ? "".concat(baseURL, "?").concat(queryParams) : baseURL;
    }
  }, {
    key: "_getDataFromWeb",
    value: function () {
      var _getDataFromWeb2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(url, apiKey) {
        var headers, response, body;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                headers = apiKey ? {
                  'x-api-key': apiKey
                } : {};
                _context2.next = 3;
                return fetch(url, {
                  headers: headers
                });

              case 3:
                response = _context2.sent;
                _context2.next = 6;
                return response.json();

              case 6:
                body = _context2.sent;

                if (!(body.status === 'error')) {
                  _context2.next = 9;
                  break;
                }

                throw new NewsAPIError(body);

              case 9:
                return _context2.abrupt("return", body);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function _getDataFromWeb(_x3, _x4) {
        return _getDataFromWeb2.apply(this, arguments);
      };
    }()
  }]);

  return NewsAPI;
}();

exports.NewsAPI = NewsAPI;

var NewsAPIError =
/*#__PURE__*/
function (_Error) {
  _inherits(NewsAPIError, _Error);

  function NewsAPIError(err) {
    var _this;

    _classCallCheck(this, NewsAPIError);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NewsAPIError).call(this));
    _this.name = "NewsAPIError: ".concat(err.code);
    _this.message = err.message;
    return _this;
  }

  return NewsAPIError;
}(_wrapNativeSuper(Error));
