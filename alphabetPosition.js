// given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
// "a" = 1, "b" = 2, etc.

const alphabetPosition = (text) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let result = [];
  for (let char of text.toLowerCase()) {
    if (alphabet.includes(char)) {
      result.push(alphabet.indexOf(char) + 1);
    }
  };
  return result.join(' ');
};

module.exports = alphabetPosition;