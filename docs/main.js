document.addEventListener('DOMContentLoaded', function () {

  const baseUrl = 'https://newsapi.org/v2/';

  const apiKey = 'd63e3d1d1622450aaf814fae749afce1';

  const headers = new Headers({ 'x-api-key': apiKey });

  const sources = [
    { value: `${baseUrl}top-headlines?sources=bbc-news`, displayName: 'Top headlines from BBC News' },
    { value: `${baseUrl}everything?q=bitcoin`, displayName: 'Articles about Bitcoin' },
    { value: `${baseUrl}top-headlines?category=sport`, displayName: 'Top sports headlines' },
  ];

  function getNews(url, page = 1) {
    url = `${url}&page=${page}`;
    return fetch(url, { headers })
      .then(response => {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          return response.json();
        }
        throw new TypeError("Oops, we haven't got JSON!");
      })
      .catch(error => console.log(error));
  }


  const widgetsContainer = document.getElementById('widgetsContainer');

  const searchPanel = new SearchPanel({ sources });

  searchPanel.submitClick.subscribe(async ({ source: url, page }) => {
    const result = await getNews(url, page);
    const widgetEls = result.articles.map(n => createWidgetEl(n));
    widgetsContainer.append(...widgetEls);
  });

  function createWidgetEl(article) {
    const title = document.createElement('a');
    title.append(article.title);
    title.setAttribute('href', article.url);
    return title;
  }
});

/** Gets search parameters and emits an event when a user clicks submit button */
class SearchPanel {
  get page() {
    const page = +this._pageEl.value || 1;
    if (!Number.isInteger(page) || page < 1) {
      throw new TypeError('The page must be a positive integer number');
    }
    return page;
  }

  get source() {
    return this._sourceEl.value;
  }

  get submitClick() {
    return this._submitClick;
  }

  constructor({ sources } = {}) {
    this._sourceEl = document.getElementById('source');
    this._initSourceOptions(this._sourceEl, sources);
    this._pageEl = document.getElementById('page');
    this._submitButton = document.getElementById('submit');
    this._submitButton.addEventListener('click', this._onSubmitClick.bind(this));
    this._submitClick = new EventEmitter();
  }

  dispose() {
    this._pageEl.removeEventListener('click', this._onSubmitClick.bind(this));
  }

  _initSourceOptions(sourceEl, sources) {
    if (!this._sourceEl) {
      throw new Error('Unable to find he source element');
    }

    DOMHelper.removeAllChildren(this._sourceEl);
    if (sources) {
      sourceEl.append(...sources.map(source => this._createSourceOptionEl(source)));
    }
  }

  _createSourceOptionEl(source) {
    const option = document.createElement('option');
    option.append(source.displayName);
    option.value = source.value;
    return option;
  }

  _onSubmitClick() {
    const source = this.source;
    const page = this.page;
    this.submitClick.emit({ source, page });
  }
}

/** Provides a layer of abstraction from the DOM events. */
class EventEmitter {
  constructor() {
    this._subscribers = [];
  }

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

function isFunction(x) {
  return typeof x === 'function';
}

class DOMHelper {
  static removeAllChildren(node) {
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
  }
}
