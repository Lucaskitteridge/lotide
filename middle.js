const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log('They both match!');
  } else {
    console.log('The arrays dont match');
  }
};

const middle = function(array) {
  let middleArray = [];
  if (array.length <= 2) {
    return middleArray;
  } else if (array.length % 2 === 1) {
    middleArray = array[Math.floor((array.length - 1) / 2)];
  } else if (array.length % 2 === 0) {
    middleArray.push(array[Math.floor((array.length - 1) / 2)]);
    middleArray.push(array[Math.floor((array.length) / 2)]);
  }
  return middleArray;
};