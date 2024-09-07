const palindromes = function (str) {
  const newStr = str.replace(/[^\w\s\']|_/g, "").replace(/\s+/g, '').toLowerCase();
  // remove all whitespace and punctuation, and change to lower case

  const reverse = newStr.split('').reverse().join('');
  // string into array of characters, reverse it, change back to string

  return newStr == reverse;
};

// Do not edit below this line
module.exports = palindromes;
