// function partsSums(list) {
//   let result = []
//   // iterate through list, removing the first item each subsequen iteration
//   for (let item of list) {
//     result.push(list.reduce((a, b) => a + b));
//     list = list.slice(1);
//   }
//   result.push(0)
//   return result
// }

// too slow
// function partsSums(list) {
//   let result = [];
//   for (let item of list) {
//     item = list.reduce((a, b) => a + b)
//     result.push(item)
//     list = list.slice(1)
//   }
//   result.push(0)
//   return result
// }

// too slow
// function partsSums(list) {
//   let result = []
//   for (let item of list) {
//     result.push(list.reduce((a, b) => a + b))
//     list = list.slice(1)
//   }
//   result.push(0)
//   return result
// }

// function partsSums(ls) {
//   let map = ls.map(l => {
//     l = ls.reduce((a, b) => a + b);
//     ls = ls.slice(1)
//     return l
//   })
//   map.push(0)
//   return map;

// }


// singular reduce ? 
// THIS PASSES!


// number one rated solution
// function partsSums(ls) {
  //   ls.unshift(0)
  //   let sum = ls.reduce((a, b) => a + b, 0);
  //   return ls.map(l => sum -= l)
  // }
  
function partsSums(ls) {
  let result = [];
  let sum = ls.reduce((a, b) => a + b, 0)

  for (let item of ls) {
    result.push(sum)
    sum -= item;
  }
  
  result.push(0);
  return result;
}


ls = [1, 2, 3, 4, 5, 6] 
console.log(partsSums(ls))

module.exports = partsSums;