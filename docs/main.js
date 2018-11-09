document.addEventListener('DOMContentLoaded', function () {

  const baseUrl = 'https://newsapi.org/v2/';

  const apiKey = 'd63e3d1d1622450aaf814fae749afce1';

  const headers = new Headers({ 'x-api-key': apiKey });

  const sources = [
    { value: `${baseUrl}top-headlines?sources=bbc-news`, displayName: 'Top headlines from BBC News' },
    { value: `${baseUrl}everything?q=bitcoin`, displayName: 'Articles about Bitcoin' },
    { value: `${baseUrl}top-headlines?category=sport`, displayName: 'Top sports headlines' },
  ];

  function getNews(url, page = 1) {
    url = `${url}&page=${page}`;
    return fetch(url, { headers })
      .then(response => {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          return response.json();
        }
        throw new TypeError("Oops, we haven't got JSON!");
      })
      .catch(error => (error));
  }

  const sourceEl = document.getElementById('source');
  const pageEl = document.getElementById('page');
  const submitButton = document.getElementById('submit');
  const widgetsContainer = document.getElementById('widgetsContainer');

  function initSourceEl(sourceEl, sources) {
    sourceEl.append(...sources.map(source => createSourceOptionEl(source)));
  }

  function createSourceOptionEl(source) {
    const option = document.createElement('option');
    option.append(source.displayName);
    option.value = source.value;
    return option;
  }

  initSourceEl(sourceEl, sources);

  submitButton.onclick = async () => {
    const url = sourceEl.value;
    const page = +pageEl.value || 1;
    if (!Number.isInteger(page) || page < 1) {
      throw new TypeError('The page must be a positive integer number');
    }
    const result = await getNews(url, page);
    const widgetEls = result.articles.map(n => createWidgetEl(n));
    widgetsContainer.append(...widgetEls);
  }

  function createWidgetEl(article) {
    const title = document.createElement('a');
    title.append(article.title);
    title.setAttribute('href', article.url);
    return title;
  }
});
