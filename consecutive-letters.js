// /* 
// check if a string contains consecutive letters 
// as they appear in the English alphabet 
// (they do not have to be in order)

// the letters must be adjacent
// they can only appear once 

// solve("abc") = True, because it contains a,b,c
// solve("abd") = False, because a, b, d are not consecutive/adjacent in the alphabet, and c is missing.
// solve("dabc") = True, because it contains a, b, c, d
// solve("abbc") = False, because b does not occur once.
// */

// function solve(str) {
//   /* this loop goes through each character in the string
//   and gets the character code at position i */
//   const charCount = {}

//   for (let i = 0; i < str.length; i++) {
//     let charCode = str.charCodeAt(i)
//     /* if charCode is in our object, increment its value
//     else add it to the object and set its value to one */
//     // we could refactor this to simply return false with if statement
//     // charCode in charCount ? charCount[charCode]++ : charCount[charCode] = 1
    
//     // if there are duplicate characters, immediately return false
//     if (charCode in charCount) return false;
//     else charCount[charCode] = 1
//   }
//   // create an array from the keys of charCount
//   let charArray = Array.from(Object.keys(charCount))

//   // loop through the array to check if nums are consecutive
//   // start on index one, check if i === i-1 + 1
//   // if it doesn't, return false
//   for (let i = 1; i < charArray.length; i++) {
//     console.log(parseInt(charArray[i]))
//     // if ((parseInt(charArray[i]) + 1) !== parseInt(charArray[i+1])) return false
//     if (parseInt(charArray[i]) !== parseInt(charArray[i-1]) + 1) return false
//   }


//   return true;

//   // return charCount;
// }

// console.log(solve('abcf'));
/* 
check if a string contains consecutive letters 
as they appear in the English alphabet 
(they do not have to be in order)

the letters must be adjacent
they can only appear once 

solve("abc") = True, because it contains a,b,c
solve("abd") = False, because a, b, d are not consecutive/adjacent in the alphabet, and c is missing.
solve("dabc") = True, because it contains a, b, c, d
solve("abbc") = False, because b does not occur once.
*/

function solve(str) {
  const charCount = {}
  
  /* this loop goes through each character in the string
  and gets the character code at position i */
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i)
    // if there are duplicate characters, immediately return false
    if (charCode in charCount) return false;
    else charCount[charCode] = 1
  }
  
  // create an array from the keys of charCount
  let charArray = Array.from(Object.keys(charCount))

  /* loop through the array to check if nums are consecutive
  start on index one, check if i === i-1 + 1 if it doesn't, return false */
  for (let i = 1; i < charArray.length; i++) {
    if (parseInt(charArray[i]) !== parseInt(charArray[i-1]) + 1) return false
  }

  return true;
}

console.log(solve('abcf'));