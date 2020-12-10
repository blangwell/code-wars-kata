const assert = require('chai').assert;

const findShort = require('../shortestWord');


describe('findShort', function() {
  it('function should return the index of the shortest word', function() {
    assert.equal(findShort('hello there you folks'), 3);
  });
});