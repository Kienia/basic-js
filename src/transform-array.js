const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }

  return arr.reduce((result, item, idx, array) => {
    if (item === '--discard-next' && item != array[array.length - 1]) {
      array.splice(idx, 2)
      return result;
    }

    if (item === '--discard-prev' && item != array[0]) {
      result.pop();
      return result;
    }

    if (item === '--double-next' && item != array[array.length - 1]) {
      result.push(arr[idx + 1]);
      return result;
    }

    if (item === '--double-prev' && item != array[0]) {
      result.push(arr[idx - 1]);
      return result;
    }

    if (item === '--double-next' || item === '--discard-prev' || item === '--double-prev' || item === '--discard-next') {
      return result;
    }

    result.push(item);
    return result;
  }, [])

}

module.exports = {
  transform
};
