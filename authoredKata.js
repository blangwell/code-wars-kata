// what do i want to teach ppl? 
// prototypes
// string => array manipulation

// get index of the alphabet of each character in a name
// add those together and return the sum


// the year is 2333, people are no longer given names, 
// but numeric representations of a names

const sumName = (name) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  name = name.replace(/[^a-zA-Z]/g, '').toLowerCase().split('');
  return name.map(n => alphabet.indexOf(n) + 1).reduce((a, b) => a + b, 0);
}

function randomString() {
  let testString = [];
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()/;';
  for (let i=0; i<Math.floor(Math.random() * possible.length); i++){
    testString.push(possible[Math.floor(Math.random() * possible.length)]);
  }
  return testString.join('');
}

console.log(sumName(randomString()));

// console.log(sumName(randomString))

// console.log(sumName('Mildred dolla $igN'))

module.exports = sumName;