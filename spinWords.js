function spinWords(str) {
  // if a word in a string is greater than or equal to five chars
  // reverse word
  return str.split(' ').map(m => {
    if (m.length >= 5) return m.split('').reverse().join('')
    else return m
  }).join(' ')
}

console.log(spinWords("Hey fellow warriors"))
// "Hey wollef sroirraw"