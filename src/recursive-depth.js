const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    count = 0;
    if (Array.isArray(arr) == true) {
        for (i=0; i<arr.length; i++) {
            count = Math.max(count, this.calculateDepth(arr[i]));
        }
        count++;
    }
    return count;
}
};
