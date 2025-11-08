const { NotImplementedError } = require('../lib');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!'
  }
  if (!(date instanceof Date) || Object.keys(date).length) {
    throw new Error("Invalid date!");
  }

  let month = (date.getMonth() + 1) / 3
  if (month >= 1 && month < 2) {
    return 'spring'
  }
  if (month >= 2 && month < 3) {
    return 'summer'
  }
  if (month >= 3 && month < 4) {
    return 'autumn'
  }
  else {
    return 'winter'
  }
}

module.exports = {
  getSeason
};
