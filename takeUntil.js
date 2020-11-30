const takeUntil = function(array, callback) {
  const newArray = [];
  for (let character of array) {
    if (!callback(character)) {
      newArray.push(character);
    } else {
      break;
    }
  }
  return newArray;
};

module.exports = takeUntil