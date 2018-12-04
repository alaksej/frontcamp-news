import { HttpRequest } from "./http-request";

export class HttpRequestFactory {
  /** Factory method */
  create(method = 'GET', url, { queryParams, body, headers }) {
    switch (method) {
      case 'GET':
      case 'DELETE':
        return new HttpRequest({ method, url, queryParams, headers });
      case 'POST':
      case 'PUT':
        return new HttpRequest({ method, url, body, queryParams, headers });
      default:
        throw new Error(`The '${method}' http method is not supported.`);
    }
  }
}