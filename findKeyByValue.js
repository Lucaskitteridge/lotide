const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌❌❌Assertion Failed: ${actual} !=== ${expected}`);
  }
};

const findKeyByValue = function(object, value) {
  let indKeys = Object.keys(object);
  for (let key of indKeys) {
    if (object[key] === value) {
      return key;
    }
  }
};