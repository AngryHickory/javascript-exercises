const sumAll = function(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number' || 
    !Number.isInteger(a) || !Number.isInteger(b) || 
    a < 0 || b < 0) {
    return 'ERROR';
  }

  let sum = 0;
  if (a > b) {
    [a, b] = [b, a];
  } 
  for (let i = a; i <= b; i++) {
    sum = sum + i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
