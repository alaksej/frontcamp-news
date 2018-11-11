export const apiKey = 'd63e3d1d1622450aaf814fae749afce1';
export const genericNewsLogoPath = './images/generic_news_logo.png';

export class SourcesConfig {
  constructor() {
    this._sourcesConfig = new Map([
      ['1', { displayName: 'Top headlines from BBC News', urlConfig: { action: 'topHeadlines', params: { sources: 'bbc-news' } } }],
      ['2', { displayName: 'Articles about Bitcoin', urlConfig: { action: 'everything', params: { q: 'bitcoin' } } }],
      ['3', { displayName: 'Top sports headlines', urlConfig: { action: 'topHeadlines', params: { category: 'sport' } } }],
    ]);
  }

  getSearchPanelOptions() {
    return Array.from(this._sourcesConfig).map(source => ({ value: source[0], displayName: source[1].displayName }));
  }

  getUrlConfig(sourceKey) {
    return this._sourcesConfig.get(sourceKey).urlConfig;
  }
}