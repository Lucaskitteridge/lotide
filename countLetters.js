const assertEqual = require('./assertEqual')

const countLetters = function(string) {
  const result = {};
  for (let letters of string) {
    if (result[letters]) {
      result[letters] += 1;
    } else {
      result[letters] = 1;
    }
  }
  delete result[' '];
  return result;
};

module.exports = countLetters