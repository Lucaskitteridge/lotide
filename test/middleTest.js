const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {

  it('returns an empty array for one or two values' , () => {
    assert.deepEqual(middle([1]), [])
    assert.deepEqual(middle([1, 2]), [])
  });

  it('retrurns the middle of the array when the length is odd and greater than two', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]) 
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3])
  });

  it('returns the middle two of the array when the length is even and greater then two', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3])
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])

  });
});
