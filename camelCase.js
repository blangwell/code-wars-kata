// function camelCase(str) {
//   str = [...str];
//   let result = [];

//   for (let item of str) {
//     if (item === item.toUpperCase()) {
//       result.push(' ', item)
//     } else result.push(item)
//   }

//   return result.join('')
// }

// submitted solution 

module.exports = camelCase = function (str) {
  let result = [];

  for (let item of [...str]) {
    if (item === item.toUpperCase()) result.push(' ', item)
    else result.push(item)
  }

  return result.join('')
}

camelCase('helloThere')
