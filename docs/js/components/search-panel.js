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