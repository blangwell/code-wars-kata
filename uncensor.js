let data = [
  ['*h*s *s v*ry *tr*ng*', 'Tiiesae', 'This is very strange'],
  ['A**Z*N*', 'MAIG', 'AMAZING'],
  ['xyz', '', 'xyz'],
  ['', '', ''],
  ['***', 'abc', 'abc']
];

// function uncensor(infected, discovered) {
//   let splitDiscovered = discovered.split('');
//   let result = []
//   console.log(splitDiscovered)
//   for (let i = 0; i < infected.length; i++) {
//     if (infected[i] === '*') {
//       result.push(splitDiscovered.shift());
//     } else {
//       result.push(infected[i])
//     }
//   }
//   console.log(result.join(''))
//   // let cleaned = infected.replace(/\*/g, splitDiscovered.shift())
//   // console.log(cleaned)
// }

// function uncensor(infected, discovered) {
//   let result = []
//   discovered = discovered.split('');
//   for (let char of infected) {
//     if (char === '*') result.push(discovered.shift());
//     else result.push(char)
//   }
//   return result.join('')
// }

function uncensor(infected, discovered) {
  discovered = discovered.split('');
  return [...infected].map(char => {
    return char === '*' ? discovered.shift() : char;
  }).join('')
}


uncensor(data[0][0], data[0][1])

data.forEach(arr => {  
  console.log(uncensor(arr[0], arr[1]))
})
