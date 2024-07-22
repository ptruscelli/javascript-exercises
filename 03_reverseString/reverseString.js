const reverseString = function(string) {
    let reversedString = "";
    //loop starting from end of string, adding each character of original string to new string
    //so needs to loop from stringlength-1 to 0
    for (let i = string.length-1;i >= 0; i--) {
        reversedString += string[i];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
