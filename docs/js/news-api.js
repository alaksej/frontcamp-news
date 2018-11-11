
const host = 'https://newsapi.org';

/** Fetches the news data from the web */
export class NewsAPI {
  constructor(apiKey) {
    if (!apiKey) throw new Error('No API key specified');
    this._apiKey = apiKey;
  }

  topHeadlines(params = { language: 'en' }) {
    const url = this._buildUrl('/v2/top-headlines', params);
    return this._getDataFromWeb(url, this._apiKey);
  }

  everything(params) {
    const url = this._buildUrl('/v2/everything', params);
    return this._getDataFromWeb(url, this._apiKey);
  }

  sources(params) {
    const url = this._buildUrl('/v2/sources', params);
    return this._getDataFromWeb(url, this._apiKey);
  }

  _buildUrl(endpoint, params) {
    const queryParams = Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
    const baseURL = `${host}${endpoint}`;
    return queryParams ? `${baseURL}?${queryParams}` : baseURL;
  }

  async _getDataFromWeb(url, apiKey) {
    const headers = apiKey ? new Headers({ 'x-api-key': apiKey }) : {};
    const response = await fetch(url, { headers });
    const body = await response.json();
    if (body.status === 'error') {
      throw new NewsAPIError(body);
    }
    return body;
  }
}

class NewsAPIError extends Error {
  constructor(err) {
    super();
    this.name = `NewsAPIError: ${err.code}`;
    this.message = err.message;
  }
}