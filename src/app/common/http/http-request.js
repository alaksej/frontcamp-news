export class HttpRequest {
  method = 'GET';
  url;
  queryParams;
  headers;
  body;

  get urlWithParams() {
    if (!this.queryParams) {
      return this.url;
    }

    const queryString = Object.keys(this.queryParams).map(key => `${key}=${this.queryParams[key]}`).join('&');
    return `${this.url}?${queryString}`;
  }

  constructor(init) {
    Object.assign(this, init);
  }
}