const findKey = function(object, callback) {
  for (let key in object) {
    let value = object[key];
    if (callback(value)) {
      return key;
    }
  }
};