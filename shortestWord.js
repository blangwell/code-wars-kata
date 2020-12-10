// given a string of words, return the length of the 
// shortest word(s). String will never be empty and 
// you do not need to account for different data types.

// const findShort = (str) => {
//   const wordList = str.split(' ');
//   const shortest = wordList.reduce((a, b) => a < b ? a : b);
//   return shortest.length;
// };

// submitted answer 
const findShort = (str) => {
  const wordList = str.split(' ');
  let shortest = wordList[0];
  
  for (let word of wordList) {
    if (word.length < shortest.length) shortest = word;
  }

  wordList.forEach(w => {
    if (w.length < shortest.length) shortest = w;
  });

  return shortest.length;
}

module.exports = findShort;