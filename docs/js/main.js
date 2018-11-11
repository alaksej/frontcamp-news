import { apiKey, sourcesConfig, genericNewsLogoPath} from './config.js';
import { EventEmitter } from './event-emitter.js';
import { DOMHelper, isIterable } from './utls.js';
import { NewsAPI } from './news-api.js';

/** Initialize the application here */
document.addEventListener('DOMContentLoaded', () => {
  const sources = Array.from(sourcesConfig).map(source => ({ value: source[0], displayName: source[1].displayName })),
    newsApi = new NewsAPI(apiKey),
    searchPanel = new SearchPanel({ sources }),
    newsList = new NewsList();

  searchPanel.submitClick.subscribe(async ({ source: sourceKey, page }) => {
    const { action, params } = sourcesConfig.get(sourceKey).config;
    const result = await newsApi[action]({ ...params, page });
    const articles = result.articles;
    if (articles && articles.length) {
      newsList.articles = articles;
    }
  });
});

/** Displays the list of the news articles */
class NewsList {
  constructor(articles) {
    this._newsListContainer = document.getElementById('newsListContainer');
    this.clear();
    this.add(articles);
  }

  set articles(articles) {
    this.clear();
    this.add(articles);
  }

  clear() {
    DOMHelper.removeAllChildren(this._newsListContainer);
  }

  add(articles) {
    if (isIterable(articles)) {
      this._newsListContainer.append(...Array.from(articles).map(article => this._createCardEl(article)));
    }
  }

  _createCardEl(article) {
    const cardSource = document.createElement('p');
    cardSource.classList.add('card-source');
    cardSource.setAttribute('title', article.source.name);
    cardSource.append(article.source.name);

    const dateTime = document.createElement('time');
    dateTime.setAttribute('title', (new Date(article.publishedAt).toLocaleString()));
    dateTime.append(new Date(article.publishedAt).toLocaleDateString());

    const cardDate = document.createElement('p');
    cardDate.classList.add('card-date');
    cardDate.append(dateTime);

    const cardFooter = document.createElement('div');
    cardFooter.classList.add('card-footer');
    cardFooter.append(cardDate, cardSource);

    const cardDescription = document.createElement('p');
    cardDescription.classList.add('card-description');
    cardDescription.setAttribute('title', article.description || '');
    cardDescription.append(article.description || '');

    const cardTitle = document.createElement('h3');
    cardTitle.classList.add('card-title');
    cardTitle.setAttribute('title', article.title);
    cardTitle.append(article.title);

    const cardText = document.createElement('div');
    cardText.classList.add('card-text');
    cardText.append(cardTitle, cardDescription, cardFooter);

    const img = document.createElement('img');
    img.setAttribute('src', article.urlToImage || genericNewsLogoPath);
    img.setAttribute('alt', article.title);

    const cardImage = document.createElement('div');
    cardImage.classList.add('card-image');
    cardImage.append(img);

    const cardLink = document.createElement('a');
    cardLink.classList.add('card-link');
    cardLink.setAttribute('href', article.url);
    cardLink.setAttribute('target', '_blank');
    cardLink.append(cardImage, cardText);

    const card = document.createElement('div');
    card.classList.add('card');
    card.append(cardLink);

    return card;
  }
}

/** Gets search parameters and emits an event when a user clicks submit button */
class SearchPanel {
  constructor({ sources = [{ displayName: '', value: '' }] } = {}) {
    this._sourceEl = document.getElementById('source');
    this._initSourceOptions(this._sourceEl, sources);
    this._pageEl = document.getElementById('page');
    this._submitButton = document.getElementById('submit');
    this._submitButton.addEventListener('click', this._onSubmitClick.bind(this));
    this._submitClick = new EventEmitter();
  }

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

  dispose() {
    this._pageEl.removeEventListener('click', this._onSubmitClick.bind(this));
  }

  _initSourceOptions(sourceEl, sources) {
    if (!this._sourceEl) {
      throw new Error('Unable to find he source element');
    }

    DOMHelper.removeAllChildren(this._sourceEl);
    sourceEl.append(...sources.map(({ displayName, value }) => this._createSourceOptionEl({ displayName, value })));
  }

  _createSourceOptionEl({ displayName, value }) {
    const option = document.createElement('option');
    option.append(displayName);
    option.value = value;
    return option;
  }

  _onSubmitClick() {
    const source = this.source;
    const page = this.page;
    this.submitClick.emit({ source, page });
  }
}
