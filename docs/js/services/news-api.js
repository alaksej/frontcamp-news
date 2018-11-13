const host = 'https://newsapi.org';

/** Fetches the news data from the web */
export class NewsAPI {
  constructor(apiKey) {
    if (!apiKey) throw new Error('No API key specified');
    this._apiKey = apiKey;
  }

  get(endpoint, params) {
    const url = this._buildUrl(`/v2/${endpoint}`, params);
    return this._getDataFromWeb(url, this._apiKey);
  }

  _buildUrl(endpoint, params) {
    const queryParams = Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
    const baseURL = `${host}${endpoint}`;
    return queryParams ? `${baseURL}?${queryParams}` : baseURL;
  }

  _getDataFromWeb(url, apiKey) {
    const headers = apiKey ? { 'x-api-key': apiKey } : {};
    return fetch(url, { headers })
      .then(response => response.json())
      .then(body => {
        if (body.status === 'error') {
          throw new NewsAPIError(body);
        }
        return body;
      });
  }
}

class NewsAPIError extends Error {
  constructor(err) {
    super();
    this.name = `NewsAPIError: ${err.code}`;
    this.message = err.message;
  }
}