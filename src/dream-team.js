const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  } else if (members.length === 0) {
    return null;
  }

  let regexp = /[a-z]/i;

  members = members.filter(member => typeof member == 'string');
  members = members.map(member => member.charAt(member.search(regexp)).toUpperCase());
  members.sort();

  return members.join('');
};
