const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌❌❌Assertion Failed: ${actual} !=== ${expected}`);
  }
};

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

const eqObjects = function(object1, object2) {
  let thing1 = Object.keys(object1)
  let thing2 = Object.keys(object2)
  if (thing1.length !== thing2.length) {
    return false
  }
  for (let key1 of thing1) {
    if (Array.isArray(object1[key1]) && Array.isArray(object2[key1])){
      if(!eqArrays(object1[key1], object2[key1])){
        return false
      }

    }
    else if (object1[key1] !== object2[key1]) {
      return false
    }
  }
  return true
}