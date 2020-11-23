// given an array comprised entirely of odd or even
// numbers, with one even/odd outlier. write a function
// that returns the correct outlier 

// function findOutlier(arr) {
//   // we have a tally map to keep track of the number of evens and odds
//   let tally = {even: 0, odd: 0} 
//   // if even is > 1 && the number in an iteration is odd, return that number
  
//   arr.forEach(n => {
//     // basically we need to check if even is > 1, if it is and n is odd, return n
//     if (n % 2 === 0) tally.even++
//     else if (n % 2 !== 0) tally.odd++

//     if (tally.even > 1 && n % 2 !== 0) return n
//     if (tally.odd > 1 && n % 2 === 0) return n
//   })
// }

// function findOutlier(arr) {
//   let tally = {e: 0, o: 0}

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) tally.e++;
//     else tally.o++;

//     if (tally.e > 1 && arr[i] % 2 !== 0) return arr[i]
//     if (tally.o > 1 && arr[i] % 2 === 0) return arr[i]

//  
//   }
// }

// initial submission
// function findOutlier(arr) {
//   let even = [];
//   let odd = [];

//   for (let num of arr) {
//     if (num % 2 === 0) even.push(num)
//     else odd.push(num)
//   }

//   return even.length === 1 ? even[0] : odd[0]
//   // console.log(`even: ${even}, odd: ${odd}`)

// }

// filter variation
function findOutlier(arr) {
  const even = arr.filter(a => a % 2 === 0);
  const odd = arr.filter(a => a % 2 !== 0);
  return even.length === 1 ? even[0] : odd[0]
}

console.log(findOutlier([1, 3, 5, 6, 7]))

module.exports = findOutlier;