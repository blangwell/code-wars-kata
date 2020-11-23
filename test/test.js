const assert = require('chai').assert;


// const titleCase = require('../title-case');
// const arrayCombine = require('../array-combinations');
// const trumpDetector = require('../trumpness');
// const twoSum = require('../twosum');
// const highLow = require('../highestLowest');
// const findOdd = require('../findOdd');
// const isSquare = require('../isSquare');
// const persistence = require('../persistence');
const findOutlier = require('../outlier');

describe('findOutlier', function() {
  it ('function should return the single even or odd number in array length of 3', function() {
    assert.equal(findOutlier([1, 2, 3]), 2)
  })
  it ('function should return the single even or odd number in an array length > 3', function() {
    assert.equal(findOutlier([2, 4, 6, 8, 10, 12, 13, 14, 16, 18]), 13)
  })
})



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

// describe('highLow', function() {
//   it ('function should return highest and lowest numbers', function() {
//     assert.equal(highLow("1 2 -3 4 5"), "5 -3")
//   })
// })

// describe('findOdd', function() {
//   it ('function should find array item that appears odd num of times', function() {
//     assert.equal(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]), 5)
//   })
// })

// describe('isSquare', function() {
//   it ('function should determine if argument is square number', function() {
//     assert.equal(isSquare(25), true)
//     assert.equal(isSquare(3), false)
//   })
// })

// describe('persistence', function() {
//   this.slow(1000)
//   it ('should return the number of times digits in arg must be multiplied to reach a single digit.', function() {
//     assert.equal(persistence(999), 4)
//   })
// })
