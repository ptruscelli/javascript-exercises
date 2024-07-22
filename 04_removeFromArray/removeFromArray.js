const removeFromArray = function(array, ...args) {
// loop through each element in given array,
// check if any of the args are present in the array,
// remove them from array if they are present.

    const newArray = array;

    for (let i = newArray.length-1; i >= 0; i--) {
        args.forEach((arg) => {
            if (newArray[i] === arg) {
                newArray.splice(i, 1);
            }
        })
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
