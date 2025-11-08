const { NotImplementedError } = require('../lib');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) { return 0 }
    else {
      let depth = 1
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          depth = Math.max(depth, this.calculateDepth(arr[i]) + 1)
        }
      }
      return depth
      // remove line with error and write your code here
    }
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
