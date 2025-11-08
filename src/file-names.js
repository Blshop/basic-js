const { NotImplementedError } = require('../lib');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let dict = {}
  for (let name of names) {
    console.log(name)
    console.log(Object.keys(dict));
    if (Object.keys(dict).includes(name)) {
      dict[name + `(${dict[name]})`] = 1
      dict[name] += 1
    } else {
      dict[name] = 1
    }
  }
  return Object.keys(dict)
  // remove line with error and write your code here
}

module.exports = {
  renameFiles
};
