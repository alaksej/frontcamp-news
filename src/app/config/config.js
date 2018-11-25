import logoPath from '../../images/generic_news_logo.png';

export const apiKey = 'd63e3d1d1622450aaf814fae749afce1';

export const genericNewsLogoPath = logoPath;

export class SourcesConfig {
  _sourcesConfig = new Map([
    ['1', { displayName: 'Top headlines from BBC News', urlConfig: { endpoint: 'top-headlines', params: { sources: 'bbc-news' } }, isPaginationHidden: true }],
    ['2', { displayName: 'Articles about Bitcoin', urlConfig: { endpoint: 'everything', params: { q: 'bitcoin' } } }],
    ['3', { displayName: 'Top sports headlines', urlConfig: { endpoint: 'top-headlines', params: { category: 'sport' } } }],
  ]);

  getSearchPanelOptions() {
    return Array.from(this._sourcesConfig, source => ({ value: source[0], displayName: source[1].displayName, isPaginationHidden: source[1].isPaginationHidden }));
  }

  getUrlConfig(sourceKey) {
    return this._sourcesConfig.get(sourceKey).urlConfig;
  }
}