function findUnique(arr) {
  // arr will be at least 3 items long
  // all items will be the same except one
  // return the unique number in the array
  return arr.filter(val => arr.lastIndexOf(val) === arr.indexOf(val))[0]
}

console.log(findUnique([ 3, 10, 3, 3, 3 ])) // 10