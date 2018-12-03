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
    this._model.patch({ isLoading: true });
    try {
      const result = await this._newsApi.get(endpoint, params);
      result && result.articles && result.articles.length
        ? this._model.patch({ newsList: { articles: result.articles, showText: false } })
        : this._model.patch({ newsList: { articles: [], showText: true, text: `Nothing's found. Try changing the channel or page number.` } });
    } catch (e) {
      console.log(e);
      const errorMessage = 'Oops, something went wrong. Maybe the page number is too big?';
      this._model.patch({ newsList: { articles: [], showText: true, text: errorMessage } });
      handleError(errorMessage);
    } finally {
      this._model.patch({ isLoading: false });
    }
  }
}
