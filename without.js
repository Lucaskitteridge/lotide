const eqArrays = require('./eqArrays')

const assertArraysEqual = require('./assertArraysEqual')

const without = function(array, removing) {
  newArray = [];
  for (let i = 0; i < array.length; i++) {
    let var1 = array[i];
    let shouldKeep = true;
    for (let j = 0; j < removing.length; j++) {
      if (var1 === removing[j]) {
        shouldKeep = false;
      }
    }
    if (shouldKeep === true) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

module.exports = without