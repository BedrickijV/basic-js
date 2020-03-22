
const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  let result = 0;

  if (typeof (sampleActivity) !== 'string' ||
      sampleActivity > MODERN_ACTIVITY ||
      sampleActivity <= 0 ||
      /[A-Za-z]/.test(sampleActivity)) {
    return false;
  }

  result = Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / (0.693 / HALF_LIFE_PERIOD));
  return result;
};
