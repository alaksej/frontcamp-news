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
                _context.next = 13;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](2);
                console.error(_context.t0);
                this._newsList.text = 'Oops, something went wrong. Maybe the page number is too big?';

              case 13:
                _context.prev = 13;

                this._searchPanel.enableSubmit();

                return _context.finish(13);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 9, 13, 16]]);
      }));

      return function loadNews(_x, _x2) {
        return _loadNews.apply(this, arguments);
      };
    }()
  }]);

  return App;
}();

exports.App = App;