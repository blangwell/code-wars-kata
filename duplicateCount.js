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
  let dupeCount = 0; let chars = {};

  Array.from(str.toLowerCase()).forEach(s => chars[s] === undefined ? chars[s] = 1 : chars[s]++);
  for (let val of Object.values(chars)) if (val > 1) dupeCount++;
  
  return dupeCount;
}

duplicateCount('kaz222234ooJOJO')

module.exports = duplicateCount;