function uniqueString(arr) {
  // convert chars to lowercase then get the charcodes of each
  let charCodeArr = arr.map(str => {
    return str.toLowerCase().split('').map(char => {
      return char.charCodeAt(0);
    })
  })
  
  // return an array with each subarray values summed
  let reducedCharCodes = charCodeArr.map(arr => {
    return arr.reduce((a, b) => a + b) / arr.length;
  })

  return reducedCharCodes.forEach(num => {
    if (reducedCharCodes.indexOf(num) === reducedCharCodes.lastIndexOf(num)) console.log(num)
  })
}

console.log(uniqueString([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]))// === 'BbBb'
console.log(uniqueString([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]))// === 'foo'
