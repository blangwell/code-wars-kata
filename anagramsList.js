const anagramsList = (word, arr) => {
  word = word.split('').sort().join('');
  return arr.filter(a => a.split('').sort().join('') == word);
}

anagramsList('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])

module.exports = anagramsList;