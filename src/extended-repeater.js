const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, { repeatTimes, separator = '+', addition, additionRepeatTimes, additionSeparator = '|' }) {
  let resultStr = '';
  const additionStr = addition;
  if (Number.isInteger(repeatTimes) || Number.isInteger(additionRepeatTimes)) {
    for (let i = 0; i < repeatTimes; i++) {
      resultStr += str;
      if (additionRepeatTimes) {
        for (let i = 0; i < additionRepeatTimes; i++) {
          i < additionRepeatTimes - 1 ? resultStr += additionStr + additionSeparator : resultStr += additionStr;
        }
      } else {
        if (additionStr) resultStr += additionStr;
      }
      if (i < repeatTimes - 1) resultStr += separator;
    }
    return resultStr;
  } else {
    return str + addition;
  }
}

module.exports = {
  repeater
};
