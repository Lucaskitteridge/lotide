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