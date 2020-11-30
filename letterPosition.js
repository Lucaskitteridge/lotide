const eqArrays = require('./eqArrays')

const assertArraysEqual = require('./assertArraysEqual')

const letterPositions = function(sentence) {
  const results = {};
  for (let letters of sentence) {
    let newArray = [];
    for (let i = 0; i < sentence.length; i++) {
      if (sentence[i] === letters) {
        newArray.push(i);
      }
    }
    results[letters] = newArray;
  }
  delete results[' '];
  return results;
};

module.exports = letterPositions