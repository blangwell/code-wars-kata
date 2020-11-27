// write a function that takes an input array containing names
// and return a string like [] => "no one likes this"
// ['peter'] => 'peter likes this'
// ['max', 'john', 'mark'] => 'max, john and mark like this
// ['alex', 'jacob', 'mark', 'max'] => 'alex, jacob and 2 others like this'


// function whoLikes(names) {
//   if (names.length < 1) return 'no one likes this'
//   if (names.length === 1) return `${names[0]} likes this`
//   // nameA and nameB like this
//   if (names.length === 2) return `${names[0]} and ${names[1]} like this`
//   // nameA, nameB and nameC like this
//   if (names.length === 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`
//   // nameA, nameB and foo others like this
//   if (names.length > 3) return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
// }

// refactor with switch statement
function whoLikes(names) {
  // switch case needs to be passed true rather than name
  // switch is checking if the cases equal the variable passed in
  // in this case, we are looking for a true condition
  switch(true) {
    case names.length < 1:
      return 'no one likes this';
    case names.length === 1:
      return `${names[0]} likes this`;
    case names.length === 2:
      return `${names[0]} and ${names[1]} like this`;
    case names.length === 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    case names.length > 3:
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
  
}

console.log(whoLikes(['barent']))

module.exports = whoLikes;