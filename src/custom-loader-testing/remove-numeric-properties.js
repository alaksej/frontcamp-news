function forEachProperty(obj, action) {
  Object.keys(obj).forEach(key => {
    action(obj, key);
    const value = obj[key];
    if (typeof value === 'object') {
      forEachProperty(value, action);
    }
  });
}

module.exports = function removeNumericProperites(obj) {

  forEachProperty(obj, (obj, key) => {
    if (typeof obj[key] === 'number') {
      delete obj[key];
    }
  })

  return obj;
}
