const { NotImplementedError } = require('../lib');

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
  if (!(arr instanceof Array)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!')
  }
  let transformed = []
  let discarded = false
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '--double-next') {
      if (i != arr.length - 1) {
        transformed.push(arr[i + 1])
        transformed.push(arr[i + 1])
        i++
      }
    }
    else if (arr[i] == '--double-prev') {
      if (transformed.length > 0 && discarded == false) {
        transformed.push(transformed[transformed.length - 1])
      }
      else {
        discarded = false
      }
    }
    else if (arr[i] == '--discard-next') {
      discarded = true
      i++
    }
    else if (arr[i] == '--discard-prev') {
      if (!discarded) {
        transformed.pop()
      }
    }
    else {
      transformed.push(arr[i])
      discarded = false
    }
  }
  return transformed
}

module.exports = {
  transform
};
