import { HttpRequestFactory } from './http-request-factory.js';

export class HttpClient {
  _httpRequestFactory = new HttpRequestFactory();

  get(url, { queryParams, headers }) {
    const httpRequest = this._httpRequestFactory.create('GET', { url, queryParams, headers });
    return this._request(httpRequest);
  }
  post(url, { queryParams, headers, body }) {
    const httpRequest = this._httpRequestFactory.create('POST', { url, queryParams, headers, body });
    return this._request(httpRequest);
  }

  put(url, { queryParams, headers, body }) {
    const httpRequest = this._httpRequestFactory.create('PUT', { url, queryParams, headers, body });
    return this._request(httpRequest);
  }

  delete(url, { queryParams, headers }) {
    const httpRequest = this._httpRequestFactory.create('DELETE', { url, queryParams, headers });
    return this._request(httpRequest);
  }

  _request(httpRequest) {
    return fetch(httpRequest.urlWithParams, { headers: httpRequest.headers, body: httpRequest.body });
  }
}