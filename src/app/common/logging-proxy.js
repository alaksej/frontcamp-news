import { HttpClient } from './http/http-client.js';

export class LoggingProxy {
  constructor(obj, logger) {
    const handlers = {
      get(target, key, context) {
        const propertyValue = target[key];

        /** IE fix: without this check, app breaks in IE. 
         * With it the requests are not logged but at least 
         * all other features work.
         * Is it because of partial Proxy polyfilling? 
         * TODO: figure out how to make it work in IE
         * */
        if (typeof propertyValue !== 'function') {
          return propertyValue;
        }

        return function (...args) {
          logger.log(`${key} ${JSON.stringify(args)}`);
          return propertyValue.apply(target, args);
        };
      },

    };
    const pobj = new Proxy(obj, handlers);
    return pobj;
  }
}
