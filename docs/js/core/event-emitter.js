import { isFunction } from './utls.js';

/** Provides a layer of abstraction from the DOM events. */
export class EventEmitter {
  _subscribers = [];

  emit(value) {
    this._subscribers.forEach(subscriber => subscriber(value));
  }

  /** The subscriber is invoked when the event is triggered. Returns Subscription to be able to unsubscribe from the event. */
  subscribe(subscriber) {
    if (!isFunction(subscriber)) {
      throw new Error('Only functions are allowed as subscribers.');
    }
    const subscriptionIdx = this._subscribers.length;
    this._subscribers = [...this._subscribers, subscriber];
    const sink = new Subscription(() => this._subscribers = this._subscribers.filter((v, i) => i !== subscriptionIdx));
    return sink;
  }
}

/** Allows to unsubscribe from the event */
class Subscription {
  constructor(unsubscribeFn) {
    this._unsubscribeFn = unsubscribeFn;
  }
  unsubscribe() {
    if (isFunction(this._unsubscribeFn)) {
      this._unsubscribeFn();
    }
  }
}
