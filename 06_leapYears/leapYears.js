const leapYears = function(year) {
    if (year % 4 === 0 && year % 100 !== 0) {
        return true;
    } else if (year % 100 === 0 && year % 400 === 0) {
        // divisible by 4 requirement is actually included here
        // as anything divisible by 400 is also thus divisible by 4
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
