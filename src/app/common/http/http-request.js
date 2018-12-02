export class HttpRequest {
  method = 'GET';
  url;
  queryParams;
  headers;
  body;

  get urlWithParams() {
    return this._getUrlWithParams(this.url, this.queryParams);
  }
  
  _getUrlWithParams(url, params) {
    if (!params) {
      return url;
    }

    const queryParams = Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
    return `${url}?${queryParams}`;
  }
}