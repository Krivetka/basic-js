const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr:[],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(value);
    return this;
  },
  removeLink(position) {
    if(typeof position != 'number' || 0 > position || position > this.arr.length-1) {
      this.arr=[];
      throw new Error('Index out of range');
    }
    this.arr.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    s='( '+this.arr[0]+' )';
    for(i=1;i<this.arr.length;i++){
      s+='~~( '+this.arr[i]+' )';
    }
    this.arr=[];
    return s;
  }
};

module.exports = chainMaker;
