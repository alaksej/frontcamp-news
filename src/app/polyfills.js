'use strict';

var modernBrowser = (
  'fetch' in window &&
  'assign' in Object &&
  'append' in HTMLElement.prototype
);

if (!modernBrowser) {
  require('whatwg-fetch');
  require('mdn-polyfills/Node.prototype.append');
}
