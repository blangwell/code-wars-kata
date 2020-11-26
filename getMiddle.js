// function takes a string
// we return the middle character if odd
// the middle two cahracters if even

function getMiddle(str) {
  let middle = Math.floor(str.length / 2);
  if (str.length % 2 !== 0) return str[middle]; // if its odd
  else return [str[middle - 1], str[middle]].join('');
}

// console.log(getMiddle('heaolo'))
// console.log(getMiddle('healo'))
// console.log(getMiddle('abcdefghi'))
console.log(getMiddle('middle'))