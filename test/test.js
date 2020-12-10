const assert = require('chai').assert;

const alphabetPosition = require('../alphabetPosition');

describe('alphabetPosition', function() {
  it('function should replace letters in a string to their position in the alphabet', function() {
    assert.equal(alphabetPosition("The sunset sets at twelve o' clock."), "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
  }); 
});