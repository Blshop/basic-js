const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let domains_count = {}
  domains.forEach(domain => {
    let keys = domain.split('.').reverse()
    let current_domain = ''
    for (let key of keys) {
      current_domain += `.${key}`
      domains_count[current_domain] = (domains_count[current_domain] || 0) + 1
    }
  })
  return domains_count
}

module.exports = {
  getDNSStats
};
