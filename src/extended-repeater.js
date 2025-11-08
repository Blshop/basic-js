const { NotImplementedError } = require('../lib');

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

function repeater(str, options) {
  let separator = 'separator' in options ? options['separator'] : '+'
  let additionSeparator = 'additionSeparator' in options ? options['additionSeparator'] : "|"
  let addition = options['addition'] === null ? 'null' : options['addition']
  let addon = Array(options['additionRepeatTimes']).fill(addition).join(additionSeparator)
  return Array(options['repeatTimes']).fill(str + addon).join(separator)
}

module.exports = {
  repeater
};
