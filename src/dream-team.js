module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let newArr = members.filter(item => typeof(item) == 'string').map(item => item.trim().toUpperCase()).sort();
  return newArr.reduce((teamName, item) => teamName + item[0], "");
};