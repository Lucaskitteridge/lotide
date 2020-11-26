const eqObjects = function(object1, object2) {
  let thing1 = Object.keys(object1);
  let thing2 = Object.keys(object2);
  if (thing1.length !== thing2.length) {
    return false;
  }
  for (let key1 of thing1) {
    if (Array.isArray(object1[key1]) && Array.isArray(object2[key1])) {
      if (!eqArrays(object1[key1], object2[key1])) {
        return false;
      }
    } else if (object1[key1] !== object2[key1]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(object1, object2) {
  if (eqObjects(object1, object2)) {
    console.log('They both match!');
  } else {
    console.log('The arrays dont match');
  }
};



