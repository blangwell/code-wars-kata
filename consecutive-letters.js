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
  /* this loop goes through each character in the string
  and gets the character code at position i */
  const charCount = {}

  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i)
    /* if charCode is in our object, increment its value
    else add it to the object and set its value to one */
    // we could refactor this to simply return false with if statement
    // charCode in charCount ? charCount[charCode]++ : charCount[charCode] = 1    
    if (charCode in charCount) return false;
    else charCount[charCode] = 1

  }
  return charCount;
}

console.log(solve('abcddd'));