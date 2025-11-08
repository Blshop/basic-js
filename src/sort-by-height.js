const { NotImplementedError } = require('../lib');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let filtered = arr.filter(element => element !== -1)
  filtered.sort((a, b) => a - b)
  let index = 0
  return arr.map(element => (element === -1 ? element : filtered[index++]))
  // remove line with error and write your code here
}

module.exports = {
  sortByHeight
};
