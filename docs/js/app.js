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
