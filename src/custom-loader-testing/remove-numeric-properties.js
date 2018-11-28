function forEachProperty(obj) {
  if (!Array.isArray(obj)) {
    removeAllNumberProperties(obj);
  }

  Object.keys(obj).forEach(key => {
    const value = obj[key];
    if (typeof value === 'object') {
      forEachProperty(obj[key]);
    }
  });
}

function removeAllNumberProperties(obj) {
  Object.keys(obj)
    .filter(key => !isNaN(key))
    .forEach(numericKey => delete obj[numericKey]);
}

module.exports = function removeNumericProperites(obj) {

  forEachProperty(obj);

  return obj;
}
