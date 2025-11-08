const { NotImplementedError } = require('../lib');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0
  let flat_matrix = matrix.flat()
  for (let item of matrix[0]) {
    sum += item
  }
  for (let i = matrix[0].length; i < flat_matrix.length; i++) {
    if (flat_matrix[i - matrix[0].length] != 0) {
      sum += flat_matrix[i]
    }
  }
  return sum
  // remove line with error and write your code here
}

module.exports = {
  getMatrixElementsSum
};
