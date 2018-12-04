import { EventEmitter } from "./common/event-emitter";

export class AppModel {
  change = new EventEmitter();

  get value() {
    return this._value;
  }

  _value = {
    searchPanel: { sourceId: '1', page: 1, isPaginationHidden: true },
    isLoading: false,
    newsList: {
      articles: [],
      showText: true,
      text: ``,
    }
  };

  patch(partial) {
    const searchPanel = { ...this._value.searchPanel, ...partial.searchPanel };
    const newsList = { ...this._value.newsList, ...partial.newsList };
    this._value = { ...this._value, ...partial, searchPanel, newsList };
    this.change.emit(this._value);
  }
}
