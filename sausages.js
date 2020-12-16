/* 
straight sausages I
curvy sausages )
twirly sausages @ ....

packing [] used exclusively by sausages
ignore other goods 

once sausage unpacked, lay them out in the 
display counter (string in the same order in which they 
came in the boxes with one space between each one)

watch out for spoiled or damage sausage packs
sausage should always be packaged in fours and 
each pack contains only one sausage type

every fifth undamaged pack of sausages does not go the counter
you keep it!

if the truck arrives empty only with empth boxes or 
goods that are not sausages, the display counter will
stay empty. every existing product is a non empty string
*/

// given a nested array of strings
// [ [ "(-)", "[IIII]", "[))))]" ], [ "IuI", "[llll]" ], [ "[@@@@]", "UwU", "[IlII]" ], [ "IuI", "[))))]", "x" ], [] ]

// should output: 
// "I I I I ) ) ) ) l l l l @ @ @ @"

// good strings:
// first and last chars are []
// 4 of the same thing

// devise regular expression


// match with regular expression
// if fifth pack, do not concat
// else concat

// function unpackSausages(truck) {
//   // const regexp = /[I|\)|@|l]{4}/g;
//   const regexp = /[I]{4}|[)]{4}|[@]{4}|[l]{4}|[║]{4}|[1]{4}/g
//   // const regexp = /(.)\1{3}/g;
//   let counter = 1;

//   let displayCase = [];
  
//   truck.forEach(box => {
//     box.forEach(pack => {
//       const check = pack.match(regexp);
//       // return displayCase + pack.match(regexp)
//       if (check !== null) displayCase.push(check.toString())
//     })
//   })
//   displayCase = displayCase.filter((item, idx) => (idx + 1) % 5 !== 0)
//   return displayCase.join('').split(''). join(' ')
// }

function unpackSausages(truck) {
  // const regexp = /[I]{4}|[)]{4}|[@]{4}|[l]{4}|[║]{4}|[1]{4}/g
  const regexp = /(.)\1{3}/g;
  let result = []

  truck.forEach(box => {
    // box.forEach(pack => console.log(pack))
    box.forEach(pack => {
      let check = pack.match(regexp)
      if (check !== null) {
        result.push(check)
      }
    })
  })
  return result.filter((item, idx)=> {
    return (idx + 1) % 5
  }).flat().join('').split('').join(' ');
}

console.log(unpackSausages([ [ "(-)", "[IIII]", "[))))]" ], [ "IuI", "[llll]" ], [ "[@@@@]", "UwU", "[IlII]" ], [ "IuI", "[))))]", "x" ], [] ]))

module.exports = unpackSausages;
