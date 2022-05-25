const add = function(a, b) {
  return a+b;
};

const subtract = function(a, b) {
  return a-b;
	
};

const sum = function(tab) {
  let sum = tab.reduce((total, currentValue) => total + currentValue, 0);

  return sum;
};

const multiply = function(tab) {
  
  let sum = 1;
  tab.forEach(function(item){
    sum = sum * item;
  });
  return sum;
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(n) {
	let factorial=1;
  for(let i = 1; i<n+1; i++){
    factorial = factorial*i;
  }

  return factorial;
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
