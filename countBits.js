/* Write a function that takes an integer 
as input, and returns the number of bits that are 
equal to one in the binary representation
of that number. You can guarantee that 
input is non-negative.*/

const countBits = (num) => {
  let count = 0;
  let bin = num.toString(2);
  for (num of bin) if (num == 1) count++
  return count;
};

// number 1 solution
// const countBits = (num) => num.toString(2).split('0').join('').length;

module.exports = countBits;