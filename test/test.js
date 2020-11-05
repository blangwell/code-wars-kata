const assert = require('chai').assert;
const titleCase = require('../title-case');
const titleCaseNoRegex = require('../title-case');

describe('titleCase', function() {
  it('function should capitalize the first character of words', function () {
    assert.equal(titleCase('hello hello'), 'Hello Hello')
    assert.equal(titleCase('a good day hello' , 'a good'), 'A good Day Hello')
  })
  it('function should ignore words in the wordList', function () {
    assert.equal(titleCase('hello there', 'there'), 'Hello there')
  })
})
// describe('titleCaseNoRegex', function() {
//   it('function should capitalize the first character of words', function () {
//     assert.equal(titleCaseNoRegex('hello hello'), 'Hello Hello')
//   })
//   it('function should ignore words in the wordList', function () {
//     assert.equal(titleCaseNoRegex('hello there', 'hello'), 'hello There')
//   })
// })


