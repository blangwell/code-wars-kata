// natural numbers below 10 that are multiples of 3 and 5 => 3, 5, 6, 9 => sum 23
// find the sum of all multiples of 3 and 5 below argument

// function sumMult(cutoff) {
//   let arr = [...Array(cutoff).keys()].filter(a => a % 3 === 0 || a % 5 === 0)
//   return arr.reduce((acc, curr) => acc + curr)
// }

// console.log(sumMult(30))


// submitted answer with edge cases
function solution(number){
  if (number < 0 || !number) return 0;
  let multiples = [...Array(number).keys()].filter(a => a % 3 === 0 || a % 5 === 0);
  return multiples.reduce((acc, curr) => acc + curr); 
};
