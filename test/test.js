const assert = require('chai').assert;


// const titleCase = require('../title-case');
// const arrayCombine = require('../array-combinations');
// const trumpDetector = require('../trumpness');
// const twoSum = require('../twosum');
const highLow = require('../highestLowest')


// describe('titleCase', function() {
//   it('function should capitalize the first character of words', function () {
//     assert.equal(titleCase('hello hello'), 'Hello Hello')
//     assert.equal(titleCase('a good day hello' , 'a good'), 'A good Day Hello')
//   })
//   it('function should ignore words in the wordList', function () {
//     assert.equal(titleCase('hello there', 'there'), 'Hello there')
//   })
// })

// describe('arrayCombine', function() {
//   it('function should return number of unique arrays that can be made', function () {
//     assert.equal(arrayCombine([[1,2],[4],[5,6]]), 4)
//     assert.equal(arrayCombine([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]), 72)
//   })
// })

// describe('trumpDetector', function() {
//   it ('function should round up two decimal digits', function() {
//     assert.equal(trumpDetector("America NUUUUUKEEEE Oooobaaaamaaaaa"), 1.89)
//   })
// })

// describe('twoSum', function () {
//   it ('function should return the indeces that, when summed, produce the target value', function() {
//     // use deepEqual because in js [0,1] == [0,1] is false
//     assert.deepEqual(twoSum([2, 7, 11, 15], 9), [0,1])
//   })
// })

describe('highLow', function() {
  it ('function should return highest and lowest numbers', function() {
    assert.equal(highLow("1 2 -3 4 5"), "5 -3")
  })
})