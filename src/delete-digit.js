const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  n = n.toString().split('');
  n.splice(n.indexOf(n.reduce((res, num, idx) => num <= n[idx + 1] ? num : res, 0)), 1);
  return parseInt(n.join(''));
}

module.exports = {
  deleteDigit
};
