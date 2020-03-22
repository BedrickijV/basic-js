module.exports = class DepthCalculator {
    calculateDepth(arr, counter = 1, arrCounter = []) {

        arrCounter.push(counter);

        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                this.calculateDepth(arr[i], counter + 1, arrCounter)
            }
        }
        return result = Math.max(...arrCounter);
    }
};
let result;

