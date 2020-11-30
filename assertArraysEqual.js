const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log('They both match!');
  } else {
    console.log('The arrays dont match');
  }
};

module.exports = assertArraysEqual