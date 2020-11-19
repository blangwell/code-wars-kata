// function takes two strings
// returns true if the strings are anagrams of eachother
// return false otherwise

function anagram(str1, str2) {
  // iterate through one string
  // check if strings are same length
  if (str1.length !== str2.length) return false;
  else {
    [str1, str2] = [str1.split('').sort(), str2.split('').sort()];
    return str1.every((curr, idx) => curr === str2[idx])
  }
}

// console.log(anagram('hello', 'olleh'))

// submitted solution
// var isAnagram = function(test, original) {
//   if (test.length !== original.length) return false;
  
//   else {
//     [test, original] = [test.toLowerCase().split('').sort(), original.toLowerCase().split('').sort()];
//     return test.every((curr, idx) => curr === original[idx])
//   }
// };

var isAnagram = function(test, original) {
  if (test.length !== original.length) return false;
  else {
    test = test.toLowerCase().split('').sort().join();
    original = original.toLowerCase().split('').sort().join();
    return test == original
  }
};

console.log(isAnagram('hello', 'olleh'))
