import { apiKey, SourcesConfig, genericNewsLogoPath } from './config.js';
import { EventEmitter } from './event-emitter.js';
import { DOMHelper, isIterable } from './utls.js';
import { NewsAPI } from './news-api.js';

/** Initialize the application here */
document.addEventListener('DOMContentLoaded', () => new App());

/** The main application class */
class App {
  constructor() {
    this._sourcesConfig = new SourcesConfig();
    this._newsApi = new NewsAPI(apiKey);
    this._searchPanel = new SearchPanel({ sources: this._sourcesConfig.getSearchPanelOptions() });
    this._newsList = new NewsList();

    this._newsList.text = `Click 'Go' to get some news!`;

    this._searchPanel.submitClick.subscribe(async ({ source: sourceKey, page }) => {
      const { action, params } = this._sourcesConfig.getUrlConfig(sourceKey);
      await this.loadNews(action, { ...params, page });
    });
  }

  async loadNews(action, params) {
    this._searchPanel.disableSubmit();
    this._newsList.text = 'Loading...';

    let result;
    try {
      result = await this._newsApi[action](params);
    } catch {
      this._newsList.text = 'Oops, something went wrong. Maybe the page number is too big?';
    }

    if (result) {
      const articles = result.articles;
      if (articles && articles.length) {
        this._newsList.articles = articles;
      } else {
        this._newsList.text = `Nothing's found. Try changing the channel or page number.`;
      }
    }

    this._searchPanel.enableSubmit();
  }
}

/** Displays the list of the news articles */
class NewsList {
  constructor(articles) {
    this._newsListContainer = document.getElementById('newsListContainer');
    this.clear();
    this.add(articles);
  }

  set text(text) {
    this.clear();
    this._newsListContainer.append(text);
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
      this._newsListContainer.innerHTML = Array.from(articles).map(article => this._createCardEl(article)).join('');
    }
  }

  _createCardEl(article) {
    return `
      <div class="card">
        <a class="card-link" href="${article.url}" target="_blank">
          <div class="card-image">
            <img src="${article.urlToImage}" alt="${article.title}">
          </div>
          <div class="card-text">
            <h3 class="card-title" title="${article.title}">${article.title}</h3>
            <p class="card-description" title="${article.description}">${article.description}</p>
            <div class="card-footer">
              <p class="card-date">
                <time title="${new Date(article.publishedAt).toLocaleString()}">${new Date(article.publishedAt).toLocaleDateString()}</time>
              </p>
              <p class="card-source" title="${article.source.name}">${article.source.name}</p>
            </div>
          </div>
        </a>
      </div>
    `;
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

  disableSubmit() {
    this._submitButton.setAttribute('disabled', '');
  }

  enableSubmit() {
    this._submitButton.removeAttribute('disabled');
  }

  _initSourceOptions(sourceEl, sources) {
    if (!this._sourceEl) {
      throw new Error('Unable to find the source element');
    }

    DOMHelper.removeAllChildren(this._sourceEl);
    sourceEl.innerHTML = sources.map(({ displayName, value }) => this._createOption({ displayName, value })).join('');
  }

  _createOption({ displayName, value }) {
    return `<option value="${value}>${displayName}</option>`;
  }

  _onSubmitClick() {
    this.submitClick.emit({ source: this.source, page: this.page });
  }
}
