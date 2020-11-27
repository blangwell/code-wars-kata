// function duplicateCount(str) {
//   // find the number of letters/numbers that have duplicates
//   // NOT the number of duplicates, but the number of items with duplicates
//   // use toLower if typeof is string
//   let tally = 0;

//   let hashTable = {};

//   // iterate through each char
//   [...str].forEach(s => {
//     if (typeof s == 'string') {
//       if (hashTable[s.toLowerCase()] === undefined) hashTable[s.toLowerCase()] = 1;
//       else hashTable[s.toLowerCase()]++;
//     }
//     else {
//       if (hashTable[s] === undefined) hashTable[s] = 1;
//       else hashTable[s]++;
//     }
//   })

//   for (let val of Object.values(hashTable)) {
//     if (val > 1) tally++
//   }

//   return tally;
// }

function duplicateCount(str) {
  let tally = 0;
  let hashTable = {};

  [...str.toLowerCase()].forEach(s => hashTable[s] === undefined ? hashTable[s] = 1 : hashTable[s]++)

  Object.values(hashTable).forEach(v => )
    if (val > 1) tally++

  // for (let val of Object.values(hashTable)) {
  //   if (val > 1) tally++
  // }

  return tally;
}

duplicateCount('kaz222234ooJOJO')

module.exports = duplicateCount;