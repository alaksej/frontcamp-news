"use strict";

require("./polyfills.js");

var _app = require("./app.js");

/** Initialize the application here */
document.addEventListener('DOMContentLoaded', function () {
  return new _app.App();
});