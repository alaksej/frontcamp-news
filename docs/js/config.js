export const apiKey = 'd63e3d1d1622450aaf814fae749afce1';

export const sourcesConfig = new Map([
  ['1', { displayName: 'Top headlines from BBC News', config: { action: 'topHeadlines', params: { sources: 'bbc-news' } } }],
  ['2', { displayName: 'Articles about Bitcoin', config: { action: 'everything', params: { q: 'bitcoin' } } }],
  ['3', { displayName: 'Top sports headlines', config: { action: 'topHeadlines', params: { category: 'sport' } } }],
]);

export const genericNewsLogoPath = './images/generic_news_logo.png';