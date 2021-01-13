// function sumOfMinimums(arr) {
//   let sum = 0;
//   for (let a of arr) {
//     sum += Math.min(...a)
//   }
//   return sum;
// }
function sumOfMinimums(arr) {
  return arr.reduce((acc, curr) => acc + Math.min(...curr), 0)
}


// [[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]] => 9


console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]))
module.exports = sumOfMinimums;