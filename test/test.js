const assert = require('chai').assert;

const anagramsList = require('../anagramsList');

describe('anagramsList', function() {
  it('should return an array', function() {
    assert.typeOf(anagramsList('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']), 'array');
  });
  it('if anagrams present, all should be returned', function() {
    assert.deepEqual(anagramsList('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']), ['carer', 'racer']);
  });
  it('if no anagrams present in array, return empty array', function() {
    assert.deepEqual(anagramsList('laser', ['lazing', 'lazy',  'lacer']), []);
  })
})

// const rgbToHex = require('../rgbToHex');

// describe('rgbToHex', function() {
//   it('should return 6 characters', function() {
//     assert.lengthOf(rgbToHex(0, 0, 0), 6);
//   });
//   it('should extend 3 characters to 6', function() {
//     assert.equal(rgbToHex(300,255,255), 'FFFFFF')
//   })
//   it('should round up decimal values', function() {
//     assert.equal(rgbToHex(173,255,47), 'ADFF2F')
//   })

// });

// const equalSides = require('../equalSidesOfAnArray');

// describe('findEvenIndex', function() {
//   this.slow(2000);

//   it('should return a number', function() {
//     assert.typeOf(equalSides.findEvenIndex([1,2,3,4]), 'number');
//   });
//   it('should return the index where sum of ints on the left === sum of ints on the right', function() {
//     assert.equal(equalSides.findEvenIndex([1,2,3,4,3,2,1]), 3);
//   });
//   it('if no index to make operation successful, return -1', function() {
//     assert.equal(equalSides.findEvenIndex([1,2,3,4,5,6]), -1);
//   });
//   it('edge case : nonexisting values should equal 0', function() {
//     assert.equal(equalSides.findEvenIndex([20,10,-80,10,10,15,35]), 0);
//   });

// });