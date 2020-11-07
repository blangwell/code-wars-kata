function arrayCombination(arr, result=[]) {
  // return the number of unique arrays
  // that can be formed by picking one elem
  // from each subarray

  // we want a single value to be returned
  // should we use reduce? 

  result = []

  for (sub of arr) {
    // we need to loop over each array,
    // take each sub array, take one value 
    let newArray = []
    newArray.push(sub[0])
    result.push(newArray)
    // for (let i=0; i<sub.length; i++) {
    //   result.push([sub[i]])
    // }
  }

  // if new array not in result, push
  console.log(result);
  // console.log(arr);
}

arrayCombination([[1,2],[4],[5,6]])

module.exports = arrayCombination;