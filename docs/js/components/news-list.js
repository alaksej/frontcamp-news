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