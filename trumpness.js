// take a string
// find how many vowels are repeated more than once in a row
// divide the repeat vowels by the total number of vowels


function trumpDetector(str) {
  const vowels = 'aeiou';
  let nonRepeatVowels = 0;
  let vowelMatches = 0;

  for (let i=1; i<str.length; i++) {
    if (vowels.includes(str[i-1].toLowerCase()) && str[i - 1] !== str[i]) nonRepeatVowels++
    if (vowels.includes(str[i].toLowerCase()) && str[i - 1] === str[i]) vowelMatches++
  }

  console.log('vowelMatches : ', vowelMatches)
  console.log('nonRepeatVowels : ', nonRepeatVowels)
  let result = vowelMatches / nonRepeatVowels
  return Math.round(result * 100)/100 

  // return Number(Math.round(result+'e2')+'e-2')

}
console.log(trumpDetector("MEXICAAAAAAAANS GOOOO HOOOMEEEE"));

// console.log(trumpDetector("listen migrants: IIII KIIIDD YOOOUUU NOOOOOOTTT"))
// trumpDetector("HUUUUUGEEEE WAAAAAALL")

module.exports = trumpDetector;