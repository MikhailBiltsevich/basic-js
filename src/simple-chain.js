const CustomError = require("../extensions/custom-error");

const chainMaker = {
  values: [],

  getLength() {
    return this.values.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.values.push(`(  )`);
    } else {
      this.values.push(`( ${value} )`);
    }
    
    return this;
  },
  removeLink(position) {
    position--;
    if (!Number.isSafeInteger(position) || (position < 0 && position >= this.values.length) ) {
      this.values = [];
      throw new Error("Position isn't correct!");
    }

    this.values.splice(position, 1);
    return this;
  },
  reverseChain() {
    this.values.reverse();
    return this;
  },
  finishChain() {
    let string = this.values.join('~~');
    this.values = [];
    return string;
  }
};

module.exports = chainMaker;
