const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("It's not array");
  }

  const DISCARD_NEXT = '--discard-next';
  const DISCARD_PREV = '--discard-prev';
  const DOUBLE_NEXT = '--double-next';
  const DOUBLE_PREV = '--double-prev';

  let transformedArray = Array.from(arr);
  for (let index = 0; index < transformedArray.length; index++) {
    switch (transformedArray[index]) {
      case DISCARD_NEXT:

        if (index + 1 < transformedArray.length) {
          transformedArray[index + 1] = transformedArray[index] = undefined;
        } else {
          transformedArray[index] = undefined;
        }
        break;

      case DISCARD_PREV:

        if (index === 0 || transformedArray[index - 1] === undefined) {
          transformedArray[index] = undefined;
        } else {
          transformedArray[index - 1] = transformedArray[index] = undefined;
        }
        break;

      case DOUBLE_NEXT:
        
        if (index + 1 < transformedArray.length) {
          transformedArray[index] = transformedArray[index + 1];
        } else {
          transformedArray[index] = undefined;
        }
        break;

      case DOUBLE_PREV:
        
        if (index > 0 && transformedArray[index - 1] !== undefined) {
          transformedArray[index] = transformedArray[index - 1];
        } else {
          transformedArray[index] = undefined;
        }
        break;
    }
  }

  return transformedArray.filter(item => item !== undefined);
};
