const anagramsList = (word, arr) => {
  return arr.filter(a => {
    return a.split('').sort().join('') == word.split('').sort().join('');
  });
}


module.exports = anagramsList;