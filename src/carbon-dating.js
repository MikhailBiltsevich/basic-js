const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity === undefined || typeof sampleActivity !== 'string' || Number.isNaN(Number.parseFloat(sampleActivity))) {
    return false;
  }

  let activity = Number.parseFloat(sampleActivity);
  if(activity > 15 || activity <= 0) {
    return false;
  }

  return Math.ceil(Math.log(MODERN_ACTIVITY / activity) / 0.693 * HALF_LIFE_PERIOD); 
};
