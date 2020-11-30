const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {

  it('should return the array minus the first item in the array', () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"])
  });
});