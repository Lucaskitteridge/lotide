const eqObjects = require('./eqObjects')

const assertObjectsEqual = function(object1, object2) {
  if (eqObjects(object1, object2)) {
    console.log('They both match!');
  } else {
    console.log('The objects dont match');
  }
};

module.exports = assertObjectsEqual;

