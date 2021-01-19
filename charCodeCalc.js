const {performance} = require('perf_hooks')

// given a string
// turn each char into its ASCII value
// and join together to create a number
// we will call it total1 
// then replace any incidence of 7 with 1
// we will call that total2

// then return the difference between 
// the sum of digits in total1 and total2

function charCodeCalc(x) {
  let total1 = x.split('').map(x => x.charCodeAt(0)).join('');
  let total2 = total1.replace(/7/g, '1');

  return total1.split('')
    .map(item => parseInt(item))
    .reduce((a, b) => a + b) - total2.split('')
    .map(item => parseInt(item))
    .reduce((a, b) => a + b);
}

let t1 = performance.now();
console.log(charCodeCalc('ABC'));
let t2 = performance.now();
console.log(`completed in ${(t2 - t1) / 1000} seconds`);