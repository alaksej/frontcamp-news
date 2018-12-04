import { HttpRequestFactory } from './http-request-factory.js';

export class HttpClient {
  _httpRequestFactory = new HttpRequestFactory();

  get(url, options) {
    return this._request('GET', url, options);
  }

  post(url, options) {
    return this._request('POST', url, options);
  }

  put(url, options) {
    return this._request('PUT', url, options);
  }

  delete(url, options) {
    return this._request('DELETE', url, options);
  }

  _request(method, url, options) {
    const httpRequest = this._httpRequestFactory.create(method, url, options);
    return fetch(httpRequest.urlWithParams, { ...httpRequest });
  }
}