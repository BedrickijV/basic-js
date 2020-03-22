module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (Object.keys(date).length > 0) {
    throw new Error();
  }

  let month = date.getMonth();

  if (month >= 2 && month <= 4) {
    return "spring";
  } else if (month >= 3 && month <= 7) {
    return "summer";
  } else if (month >= 3 && month <= 10) {
    return "autumn";
  } else if (month == 11 || month >= 0 && month <= 1) {
    return "winter";
  }
};
