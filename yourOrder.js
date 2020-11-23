// each word in the string will contain a single number
// sort the words by the numbers contained in them
function yourOrder(str) {
  if (!str) return '';

  let arr = str.split(' ');

  // go through each word
  // check each character of each word
  // find the number
  // push to array? 
  // problem is 

  let dict = {}

  // populating dict in this way sorts by key value
  arr.forEach(s => dict[s.match(/\d+/g)] = s)

  let newArr = Object.values(dict).join(' ')

  // find base number
  // check if numbers higher or lower
  return newArr;
}

// each word in the string will contain a single number
// sort the words by the numbers contained in them
function order(str) {
  if (!str) return '';
  let dict = {};
  str.split(' ').forEach(s => dict[s.match(/\d+/g)] = s);
  return Object.values(dict).join(' ');
}

function orderSort(str) {
  // if (!str) return '';
  return str.split(' ').sort((a, b) => a.match(/\d/) - b.match(/\d/)).join(' ')
}



// console.log(order("is2 Thi1s T4est 3a"));
console.log(orderSort("is2 Thi1s T4est 3a"));
//"Thi1s is2 3a T4est"