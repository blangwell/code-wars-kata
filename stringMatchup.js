// given two arrays of strings, 
// return the number of times each string of 
// the second array appears in the first array

/* 
array1 = ['abc', 'abc', 'xyz', 'cde', 'uvw']
array2 = ['abc', 'cde', 'uap']

'abc' appears twice in the first array (2)
'cde' appears only once (1)
'uap' does not appear in the first array (0)

solve(array1, array2) = [2, 1, 0]
*/

// function stringMatchup(a, b) {
//   // loop through b
//   let matches = new Array(b.length).fill(0)
//   b.forEach((checkStr, idx) => {
//     a.forEach(matchStr => {
//       if (matchStr === checkStr) {
//         matches[idx]++;
//       }
//     })
//   });
//   console.log(matches);
//   return matches;
// }

function stringMatchup(a, b) {
  // map since we want new array
  return b.map(checkStr => {
    // return the length of a.filter
    // where matchStr === checkStr
    return a.filter(matchStr => {
      return matchStr === checkStr
    }).length
  });
}

console.log(stringMatchup(['abc', 'abc', 'xyz', 'cde', 'uvw'], ['abc', 'cde', 'uap']))