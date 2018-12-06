export function getClassAsync(name) {
  switch (name) {
    case 'NewsList':
      return import(/* webpackChunkName: "news-list" */ '../components/news-list/news-list.js').then(({ default: NewsList }) => NewsList);
    case 'ErrorPopup':
      return import(/* webpackChunkName: 'error-popup' */ '../error-handling/error-popup/error-popup.js').then(({ default: ErrorPopup }) => ErrorPopup);
    default:
      break;
  }
}
