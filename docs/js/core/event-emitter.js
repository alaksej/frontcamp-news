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