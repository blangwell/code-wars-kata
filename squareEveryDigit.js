// write a function that takes a number
// squares every digit 
// and concatenates the digits (not add them)

function squareDigits(num){
  let squared = num.toString().split('').map(n => (n ** 2).toString());
  return parseInt(squared.reduce((acc, curr) => acc + curr));
}

console.log(squareDigits(9119))
// expect 811181