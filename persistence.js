// write a function that returns the number of times
// you must multiply the digits of parameter 
// until a single digit is reached

// Submitted answer : 
function persistence(num) {
  let result = 0;

  function splitNum (num) {
    return num.toString().split('').map(m => parseInt(m))
  }

  function multiplyNums(num) {
    result++
    let product = num.reduce((acc, curr) => acc * curr)
    if (product.toString().length > 1) multiplyNums(splitNum(product))    
  }
  
  let numArr = splitNum(num)
  
  if (numArr.length === 1) return 0
  else multiplyNums(numArr)

  return result;
}


// function persistenceWhile(num) {
//   let iters = 0;

//   num = num.toString()

//   while (num.length > 1) {
//     iters++
//     num = num.split('').map(m => parseInt(m)).reduce((a, b) => a * b).toString();
//   }

//   return iters;
// }


// function persistence(num) {
//   let result = 0;

//   function splitNum (num) {
//     return num.toString().split('').map(m => parseInt(m))
//   }

//   let numArr = splitNum(num)

  

//   multiplyNums(numArr)
//   // this multiplies all numbers, now we need to iterate
//   function multiplyNums(num) {
//     result++
//     product = num.reduce((acc, curr) => acc * curr)
//     if (product.toString().length > 1) multiplyNums(splitNum(product))
//     if (product.toString().length === 1) return result 
    
//   }
  
//   return result;

// }


// function persistence(num) {
//   let splitNum = num.toString().split('').map(m => parseInt(m));
//   let iterations = 0;

//   // this multiplies all numbers, now we need to iterate
//   let product = splitNum.reduce((acc, curr) => {
//     iterations++
//     return acc * curr
//   })

//   console.log(product)
//   if (product.toString().length === 1) return iterations 
//   else persistence(product)
    
// }

console.log('RESULT : ', persistence(1245))

module.exports = persistence;