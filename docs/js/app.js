import { SourcesConfig, apiKey } from './config/config.js';
import { NewsAPI } from './services/news-api.js';
import { NewsList } from './components/news-list.js';
import { SearchPanel } from './components/search-panel.js';

/** The main application class */
export class App {
  constructor() {
    this._sourcesConfig = new SourcesConfig();
    this._newsApi = new NewsAPI(apiKey);
    this._searchPanel = new SearchPanel({ sources: this._sourcesConfig.getSearchPanelOptions() });
    this._newsList = new NewsList(document.getElementById('newsListContainer'));
    this._newsList.text = `Click 'Go' to get some news!`;
    this._searchPanel.submitClick.subscribe(this.onSubmitClick.bind(this));
  }

  onSubmitClick({ source, page }) {
    const { endpoint, params } = this._sourcesConfig.getUrlConfig(source);
    this.loadNews(endpoint, { ...params, page });
  }

  loadNews(endpoint, params) {
    this._searchPanel.disableSubmit();
    this._newsList.text = 'Loading...';

    this._newsApi.get(endpoint, params)
      .then(result => result && result.articles && result.articles.length
        ? this._newsList.articles = result.articles
        : this._newsList.text = `Nothing's found. Try changing the channel or page number.`
      )
      .catch(() => this._newsList.text = 'Oops, something went wrong. Maybe the page number is too big?')
      .then(() => this._searchPanel.enableSubmit());
  }
}
