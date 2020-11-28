// convert a string to a new string where each character
// is a "(" if it occurs only once and a ")" if char appears
// more than one - ignoring capitalization

// function duplicateEncoder(word) {
//   return word.toLowerCase().split('').map(w => {
//     if (word.indexOf(w) === word.lastIndexOf(w)) return w = '('
//     else return w = ')'
//   }).join('')
// }

// function duplicateEncoder(word) {
//   return word.toLowerCase().split('').map(w => {
//     return word.indexOf(w) === word.lastIndexOf(w) ? w ='(' : w = ')'
//   }).join('')
// }

//submitted solution
function duplicateEncoder(word){
  word = word.toLowerCase();
  let encoded = word.split('').map(w => word.indexOf(w) === word.lastIndexOf(w) ? '(' : ')')
  return encoded.join('')
}

console.log(duplicateEncoder('hello there bud'))

module.exports = duplicateEncoder;