function forEachProperty(obj, action) {
  Object.keys(obj).forEach(key => {
    if (!Array.isArray(obj)) {
      action(obj, key);
    }

    const value = obj[key];
    if (typeof value === 'object') {
      forEachProperty(value, action);
    }
  });
}

module.exports = function removeNumericProperites(obj) {

  forEachProperty(obj, (obj, key) => {
    if (!isNaN(+key)) {
      delete obj[key];
    }
  })

  return obj;
}
