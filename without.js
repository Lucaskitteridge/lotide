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