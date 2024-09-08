const findTheOldest = function(arr) {
    const currentYear = (new Date()).getFullYear();
    sortedArr = arr.sort( (a, b) => {
        if (a.yearOfDeath == undefined) {
            lastPerson = currentYear - a.yearOfBirth;
        } else {
            lastPerson = a.yearOfDeath - a.yearOfBirth;
        };
        if (b.yearOfDeath == undefined) {
            nextPerson = currentYear - b.yearOfBirth;
        } else {
            nextPerson = b.yearOfDeath - b.yearOfBirth;
        };
        return lastPerson > nextPerson ? -1 : 1;
    })
    
    return sortedArr[0];
};

// Do not edit below this line
module.exports = findTheOldest;

