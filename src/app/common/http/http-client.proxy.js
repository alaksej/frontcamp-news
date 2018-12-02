import { HttpClient } from './http-client.js';

export class HttpClientProxy {
  constructor() {
    const handlers = {
      get(target, key, context) {
        const propertyValue = target[key];

        /** IE fix: without this check, app breaks in IE. 
         * With it the requests are not logged but at least 
         * all other features work.
         * Is it because of partial Proxy polyfilling? */
        if (typeof propertyValue !== 'function') {
          return propertyValue;
        }

        return function (...args) {
          console.info(`${key} ${JSON.stringify(args)}`);
          return propertyValue.apply(target, args);
        };
      },

    };
    const pobj = new Proxy(new HttpClient(), handlers);
    return pobj;
  }
}