import { handleError } from "../error-handler/error-hanlder-loader";

const host = 'https://newsapi.org';

/** Fetches the news data from the web */
export class NewsAPI {
  _apiKey;
  
  constructor(apiKey) {
    if (!apiKey) throw new Error('No API key specified');
    this._apiKey = apiKey;
  }

  async get(endpoint, params) {
    const url = this._buildUrl(`/v2/${endpoint}`, params);
    return await this._getDataFromWeb(url, this._apiKey);
  }

  _buildUrl(endpoint, params) {
    const queryParams = Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
    const baseURL = `${host}${endpoint}`;
    return queryParams ? `${baseURL}?${queryParams}` : baseURL;
  }

  async _getDataFromWeb(url, apiKey) {
    const headers = apiKey ? { 'x-api-key': apiKey } : {};
    let response;
    try {
      response = await fetch(url, { headers });
    } catch (e) {
      handleError('Network error.');
      return;
    }
    const body = await response.json();
    if (body.status === 'error') {
      const error =  new NewsAPIError(body);
      throw error;
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