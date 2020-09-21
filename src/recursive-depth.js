const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, depth = 1) {

    arr = arr.filter(Array.isArray);
    let temp = 1;

    for (let index = 0; index < arr.length; index++) {
      temp += this.calculateDepth(arr[index], temp);
      arr[index] = temp;
      temp = depth;
    }

    if (!arr.length) {
      return temp;
    }

    return Math.max(...arr);
  }
};