import { SourcesConfig, apiKey } from '../../config/config.js';
import { NewsAPI } from '../../services/news-api.js';

export class SearchPanelController {
  _sourcesConfig = new SourcesConfig();
  _newsApi = new NewsAPI(apiKey);

  constructor(model) {
    this._model = model;
  }

  onSubmitClick({ source, page }) {
    const { endpoint, params } = this._sourcesConfig.getUrlConfig(source);
    this.loadNews(endpoint, { ...params, page });
  }

  async loadNews(endpoint, params) {
    const { default: NewsList } = await import(/* webpackChunkName: "news-list" */ '../news-list/news-list.js');
    if (!this._newsList) {
      this._newsList = new NewsList(document.getElementById('newsListContainer'));
    }

    this._model.setIsLoading(true);
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
      this._model.setIsLoading(false);
    }
  }
}
