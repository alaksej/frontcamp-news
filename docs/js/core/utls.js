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