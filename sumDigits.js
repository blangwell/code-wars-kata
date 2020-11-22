// write a function named sumDigits that takes a number
// and returns the sum of the absolute value of each digit

// function sumDigits(num) {
//   if (num < 10) return num
//   else {
//     return num.toString().split('').reduce((acc, curr) => Math.abs(acc) + Math.abs(curr) )
//   }
// }

// submitted solution
function sumDigits(num) {
  numArr = Math.abs(num).toString().split('');
  if (numArr.length === 1) return num;
  else return numArr.reduce((acc, curr) => Math.abs(acc) + Math.abs(curr));
}

console.log(sumDigits(99))