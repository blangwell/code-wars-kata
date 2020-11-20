// natural numbers below 10 that are multiples of 3 and 5 => 3, 5, 6, 9 => sum 23
// find the sum of all multiples of 3 and 5 below argument

function sumMult(cutoff) {
  let arr = [...Array(cutoff).keys()]
  arr = arr.filter(a => a % 3 === 0 || a % 5 === 0);
  console.log(arr)
  return arr.reduce((acc, curr) => acc + curr)
}

console.log(sumMult(10))