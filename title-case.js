// title case
/* write a function to convert a string to 
title case, given an optional list of exceptions
(minor words) minor words given as string
separated by spaces. function should ignore the case of minor words */



// function titleCase(str, minorWords) {
//   // split string in array to examine each word
//   let strArray = str.split(' ')
//   let result = []
//   // if (strArray.includes(minorWords)) console.log(minorWords)
  
//   // basic functionality
//   // loop through each array item

//   for (word of strArray) {
//     console.log(word)
//   }
//   // make the first character upper case
//   // join array back into string
//   // return string
//   return result
// }

// function titleCase(str, minorWords) {
//   // return str.replace(/\b[a-z]/, 'X')
//   // g does a global search for word boundaries
//   // use the replace function to match the first char of each word
//   // then run a function that takes the match found and converts it to upper case
//   // this converts all words
//   // need a check for minor Words 
//   // return str.replace(/\b[a-z]/g, match => match.toUpperCase())
//   let wordArray = minorWords.split(' ')

//   return str.replace(/\b[a-zA-Z]+/g, match => {
//     console.log(match)
//     if (!wordArray.includes(match)) {
//       return `${match[0].toUpperCase()}${match.slice(1 , match.length).toLowerCase()}`
//       // since replace is a higher order function, it is continuously called
//       // meaning that we can simply return match instead of doing another 
//       // conditional to discern if the word is in the minorWords list
//     } else return match
//   })
// }


function titleCase(str, minorWords) {
  // return str.replace(/\b[a-z]/, 'X')
  // g does a global search for word boundaries
  // use the replace function to match the first char of each word
  // then run a function that takes the match found and converts it to upper case
  // this converts all words
  // need a check for minor Words 
  // return str.replace(/\b[a-z]/g, match => match.toUpperCase())
  let wordArray = minorWords.split(' ')

  return str.replace(/\b[a-zA-Z]+/g, match => {
    console.log(match)
    if (!wordArray.includes(match)) {
      return `${match[0].toUpperCase()}${match.slice(1 , match.length).toLowerCase()}`
      // since replace is a higher order function, it is continuously called
      // meaning that we can simply return match instead of doing another 
      // conditional to discern if the word is in the minorWords list
    } else return match
  })
}

// console.log(titleCase('hey there hello', 'hey there'))

console.log(titleCase('hey there hello', 'hey there'))
titleCase('a clash of KINGS', 'a an the of'), 'A Clash of Kings')
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'), 'The Wind in the Willows'))
console.log(titleCase('the quick brown fox'))
