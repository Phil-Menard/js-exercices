const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function() {

  let numbers = arguments[0];
  let result = 0;

  for (let i = 0; i < numbers.length; i++)  {
    result += +numbers[i];
  }

  return result;
};

const multiply = function() {

  let numbers = arguments[0];
  let result = 1;

  for (let i = 0; i < numbers.length; i++)  {
    result *= +numbers[i];
  }

  return result;

};

const power = function(a, b) {
  return a ** b;
	
};

const factorial = function(number) {

  let result = 1;
	if (number > 1) {
    for (let i = 1; i <= number; i++)  {
      result *= i;
    }
    return result;
  }
  else  {
    return 1;
  }
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
