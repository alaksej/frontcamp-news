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