import { SourcesConfig, apiKey } from '../../config/config.js';
import { NewsAPI } from '../../services/news-api.js';

export class SearchPanelController {
  _sourcesConfig = new SourcesConfig();
  _newsApi = new NewsAPI(apiKey);

  constructor(model) {
    this._model = model;
  }

  onSourceChange(sourceId) {
    this._model.patch({ searchPanel: { sourceId, isPaginationHidden: this._sourcesConfig.getIsPaginationHidden(sourceId) } });
  }

  onPageChange(page) {
    this._model.patch({ searchPanel: { page } });
  }

  onSubmitClick() {
    const { endpoint, params } = this._sourcesConfig.getUrlConfig(this._model.value.searchPanel.sourceId);
    this.loadNews(endpoint, { ...params, page: this._model.value.searchPanel.page });
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
