const sumAll = function(numOne, numTwo) {
    let sum = 0;
    let ints = Math.abs(numTwo - numOne);
    if ((numOne < 0 || numTwo < 0)) {
            return 'ERROR';
        } else if (!Number.isInteger(numOne) || !Number.isInteger(numTwo)) {
            return 'ERROR';
        } else {
            for (let i = 1; i <= ints + 1; i++) {
                sum += i;
            }
        }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
