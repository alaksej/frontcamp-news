import { handleError } from "../error-handling/error-handling";
import { HttpClient } from "../common/http/http-client";

const host = 'https://newsapi.org';
const apiVersion = 'v2';

/** Fetches the news data from the web */
export class NewsAPI {
  _httpClient = new HttpClient();

  constructor(apiKey) {
    if (!apiKey) throw new Error('No API key specified');
    this._headers = { 'x-api-key': apiKey };
  }

  get(endpoint, queryParams) {
    return this._getDataFromWeb(this._buildUrl(endpoint), queryParams);
  }

  _buildUrl(endpoint) {
    return `${host}/${apiVersion}/${endpoint}`;
  }

  async _getDataFromWeb(url, queryParams) {
    let response;
    try {
      response = await this._httpClient.get(url, { headers: this._headers, queryParams });
    } catch (e) {
      handleError('Network error.');
      console.error(e);
      return;
    }

    const body = await response.json();
    if (body.status === 'error') {
      const error = new NewsAPIError(body);
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