import { EventEmitter } from "./common/event-emitter";

export class AppModel {
  change = new EventEmitter();

  get value() {
    return this._value;
  }

  _value = {
    searchPanel: { source: '1', page: 1 },
    isLoading: false,
    newsList: {
      articles: [],
      showText: true,
      text: ``,
    }
  };

  patch(partial) {
    this._value = { ...this._value, ...partial };
    this.change.emit(this._value);
  }
}
