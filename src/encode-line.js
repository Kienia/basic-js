const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const encode = [];

  str.split('').reduce((counter, letter, idx, array) => {
    if (letter === array[idx - 1]) {
      encode[encode.length - 1] = ++counter + letter;
      return counter;
    }
    encode.push(letter);
    return counter = 1;
  }, 1)

  return encode.join('');
}

module.exports = {
  encodeLine
};
