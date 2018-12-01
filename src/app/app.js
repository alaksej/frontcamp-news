import { SourcesConfig, apiKey } from './config/config.js';
import { NewsAPI } from './services/news-api.js';
import { SearchPanel } from './components/search-panel.js';
import { getErrorHandler, handleError } from './error-handler/error-hanlder-loader.js';

/** The main application class */
export class App {
  _sourcesConfig = new SourcesConfig();
  _newsApi = new NewsAPI(apiKey);
  _searchPanel = new SearchPanel({ sources: this._sourcesConfig.getSearchPanelOptions() });
  _newsList;

  constructor() {
    this._searchPanel.submitClick.subscribe(this.onSubmitClick.bind(this));
  }

  onSubmitClick({ source, page }) {
    const { endpoint, params } = this._sourcesConfig.getUrlConfig(source);
    this.loadNews(endpoint, { ...params, page });
  }

  async loadNews(endpoint, params) {
    const { default: NewsList } = await import(/* webpackChunkName: "news-list" */ './components/news-list/news-list.js');
    if (!this._newsList) {
      this._newsList = new NewsList(document.getElementById('newsListContainer'));
    }

    this._searchPanel.disableSubmit();
    this._newsList.text = 'Loading...';

    try {
      const result = await this._newsApi.get(endpoint, params);
      result && result.articles && result.articles.length
        ? this._newsList.articles = result.articles
        : this._newsList.text = `Nothing's found. Try changing the channel or page number.`;
    } catch (e) {
      console.log(e);
      const errorMessage = 'Oops, something went wrong. Maybe the page number is too big?';
      this._newsList.text = errorMessage;
      handleError(errorMessage);
    } finally {
      this._searchPanel.enableSubmit();
    }
  }
}
