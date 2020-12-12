const assert = require('chai').assert;

const equalSides = require('../equalSidesOfAnArray');

describe('findEvenIndex', function() {
  this.slow(2000);

  it('should return a number', function() {
    assert.typeOf(equalSides.findEvenIndex([1,2,3,4]), 'number');
  });
  it('should return the index where sum of ints on the left === sum of ints on the right', function() {
    assert.equal(equalSides.findEvenIndex([1,2,3,4,3,2,1]), 3);
  });
  it('if no index to make operation successful, return -1', function() {
    assert.equal(equalSides.findEvenIndex([1,2,3,4,5,6]), -1);
  });
  it('edge case : nonexisting values should equal 0', function() {
    assert.equal(equalSides.findEvenIndex([20,10,-80,10,10,15,35]), 0);
  });

});