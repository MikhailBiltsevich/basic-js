const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const SECONDS_IN_HOUR = 3600;

  let result = {
    turns: 1,
    seconds: undefined
  };

  for (let i = 1; i < disksNumber; i++) {
    result.turns = result.turns * 2 + 1;
  }

  result.seconds = Math.floor(result.turns * SECONDS_IN_HOUR / turnsSpeed);

  return result;
};
