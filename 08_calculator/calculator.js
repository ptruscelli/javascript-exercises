const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, num) => (total + num), 0);
};

const multiply = function(arr) {
  return arr.reduce((total, num) => (total * num));
};

const power = function(a, b) {
  return a ** b;
	
};

const factorial = function(num) {
  result = num;

	if (num === 1 || num === 0) {
    return 1;
  } else {
    for (let i = num-1; i > 1; i--) {
      result *= i;
    }
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
