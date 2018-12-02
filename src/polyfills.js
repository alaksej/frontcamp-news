'use strict';

var modernBrowser = (
  'fetch' in window &&
  'assign' in Object &&
  'append' in HTMLElement.prototype &&
  'Proxy' in window
);

if (!modernBrowser) {
  require('whatwg-fetch');
  require('mdn-polyfills/Node.prototype.append');
  require('proxy-polyfill/proxy.min.js');
}
