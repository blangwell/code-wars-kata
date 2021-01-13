// turn an array into total of all numbers
// function total(arr) {
//   return arr.reduce((acc, curr) => acc + curr)
// }
// console.log(total([1,2,3]))

// turn an array into a long string of numbers
// function stringConcat(arr) {
//   return arr.reduce((acc, curr) => acc + curr.toString())
// }
// console.log(stringConcat([1, 2, 3]))

// turn an array of voter objects into a count of
// how many people voted
// var voters = [
//   {name:'Bob' , age: 30, voted: true},
//   {name:'Jake' , age: 32, voted: true},
//   {name:'Kate' , age: 25, voted: false},
//   {name:'Sam' , age: 20, voted: false},
//   {name:'Phil' , age: 21, voted: true},
//   {name:'Ed' , age:55, voted:true},
//   {name:'Tami' , age: 54, voted:true},
//   {name: 'Mary', age: 31, voted: false},
//   {name: 'Becky', age: 43, voted: false},
//   {name: 'Joey', age: 41, voted: true},
//   {name: 'Jeff', age: 30, voted: true},
//   {name: 'Zack', age: 19, voted: false}
// ];

// // didn't use reduce, but this is slick
// function totalVotes(arr) {
//   return arr.filter(a => a.voted).length;
// }
// function totalVotes(arr) {
  // convert true/false to nums => +false = 0 && +true = 1
//   return arr.reduce((a, b) => a + +b.voted, 0)
// }

// console.log(totalVotes(voters))

// return sum of prices in wishlist
// const wishlist = [
//   { title: "Tesla Model S", price: 90000 },
//   { title: "4 carat diamond ring", price: 45000 },
//   { title: "Fancy hacky Sack", price: 5 },
//   { title: "Gold fidgit spinner", price: 2000 },
//   { title: "A second Tesla Model S", price: 90000 }
// ];

// function shoppingSpree(arr) {
//   return arr.reduce((acc, curr) => acc + curr.price, 0)
// }
// console.log(shoppingSpree(wishlist))

// flatten array of arrays 
// const arrays = [
//   ["1", "2", "3"],
//   [true],
//   [4, 5, 6]
// ];

// function flatten(arr) {
//   return arr.reduce((acc, curr) => acc.concat(curr))
// }
// console.log(flatten(arrays));

/* Include how many of the potential voters were in the ages 18-25, 
how many from 26-35, how many from 36-55, 
and how many of each of those age ranges actually voted. 
The resulting object containing this data should have 6 properties. 
See the example output at the bottom. */

var voters = [
  {name:'Bob' , age: 30, voted: true},
  {name:'Jake' , age: 32, voted: true},
  {name:'Kate' , age: 25, voted: false},
  {name:'Sam' , age: 20, voted: false},
  {name:'Phil' , age: 21, voted: true},
  {name:'Ed' , age:55, voted:true},
  {name:'Tami' , age: 54, voted:true},
  {name: 'Mary', age: 31, voted: false},
  {name: 'Becky', age: 43, voted: false},
  {name: 'Joey', age: 41, voted: true},
  {name: 'Jeff', age: 30, voted: true},
  {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
  let result = { 
    numYoungVotes: 0,
    numYoungPeople: 0,
    numMidVotesPeople: 0,
    numMidsPeople: 0,
    numOldVotesPeople: 0,
    numOldsPeople: 0 
  }
  arr.forEach(a => {
    if (a.age >= 18 && a.age <= 25) result.numYoungPeople++
    if (a.age >= 18 && a.age <= 25 && a.voted) result.numYoungVotes++

    if (a.age >= 26 && a.age <= 35) result.numMidsPeople++
    if (a.age >= 26 && a.age <= 35 && a.voted) result.numMidVotesPeople++
    
    if (a.age >= 36 && a.age <= 55) result.numOldsPeople++
    if (a.age >= 36 && a.age <= 55 && a.voted) result.numOldVotesPeople++
    
  })
  return result;
}

console.log(voterResults(voters));