const { NotImplementedError } = require('../lib');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let team = []
  if (Array.isArray(members)) {
    for (let member of members) {
      if (typeof member === 'string') {
        team.push(member.trim()[0].toUpperCase())
      }
    }
    if (team == []) {
      return false
    }
    else return team.sort().join("")
  }
  else return false
}

module.exports = {
  createDreamTeam
};
