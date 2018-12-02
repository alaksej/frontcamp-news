import { HttpClient } from './http-client.js';

export class HttpClientProxy {
  constructor() {
    const handlers = {
      get(target, key) {
        const originalMethod = target[key];
        return function (...args) {
          console.info(`${key} ${JSON.stringify(args)}`);
          return originalMethod.apply(target, args);
        };
      },
    };
    const pobj = new Proxy(new HttpClient(), handlers);
    return pobj;
  }
}