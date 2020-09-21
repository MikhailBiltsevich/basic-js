const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (options.separator === undefined) {
    options.separator = '+';
  }

  if (options.additionSeparator === undefined) {
    options.additionSeparator = '|';
  }

  let addition = options.addition !== undefined ? options.addition : '';
  options.additionRepeatTimes--;

  while (options.additionRepeatTimes > 0) {
    addition += options.additionSeparator + options.addition;
    options.additionRepeatTimes--;
  }

  result = str = str + addition;
  options.repeatTimes--;

  while (options.repeatTimes > 0) {
    result += options.separator + str;
    options.repeatTimes--;
  }

  return result;
};
  