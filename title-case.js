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

// if (!minorWords) {
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



// titleCase('a clash of KINGS', 'a an the of'), 'A Clash of Kings'
// titleCase('THE WIND IN THE WILLOWS', 'The In'), 'The Wind in the Willows'
// titleCase('the quick brown fox'), 'The Quick Brown Fox'

function titleCaseNoRegex(str, wordList) {
  let result = '';
  str = str.split(' ')
  // convert wordList to lowercase for testing and split into array
  if (wordList && wordList.length > 0) {
    wordList = wordList.toLowerCase().split(' ');
    for (word of str) {
      if (wordList.includes(word.toLowerCase())) result += word
      else result += (word[0].toUpperCase() + word.slice(1, word.length))
    }
  }
  console.log(str)
  console.log(wordList)
  console.log('result: ', result)
  return result;
}

// titleCaseNoRegex('hello there you', 'HELLO HOWDY JUST')

// function titleCase(str, minorWords) {
//   // g does a global search for word boundaries
//   // use the replace function to match the first char of each word
//   // then run a function that takes the match found and converts it to upper case
//   // this converts all words
//   // need a check for minor Words 
//   // return str.replace(/\b[a-z]/g, match => match.toUpperCase())
//   if (minorWords && minorWords.length > 0) {
//     str.replace(/\b[a-zA-Z]+/g, match => {
//       return `${match[0].toUpperCase()}${match.slice(1 , match.length).toLowerCase()}`
//     })
//   } else {
//     return str.replace(/\b[a-zA-Z]+/g, match => match[0].toUpperCase() + match.slice(1, match.length))
// }
// }

function titleCase(str, minorWords) {
  result = []
  let strArray = str.toLowerCase().split(' ')
  minorWords && minorWords.length > 0 ? minorWords = minorWords.toLowerCase().split(' ') : minorWords = []

  for (let i=0; i < strArray.length; i++) {
    if (minorWords.includes(strArray[i]) && i != 0) result.push(strArray[i])
    else if (strArray[i].length > 0) result.push(strArray[i][0].toUpperCase() + strArray[i].slice(1))
  }

  return result.join(' ')
}

titleCase('hello', 'HELLO THERE')

module.exports = titleCase;
// module.exports = titleCaseNoRegex;