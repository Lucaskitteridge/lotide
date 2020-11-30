const assertEqual = require('./assertEqual')

const findKeyByValue = function(object, value) {
  let indKeys = Object.keys(object);
  for (let key of indKeys) {
    if (object[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue