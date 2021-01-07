function cube(num1, num2) {
  let total = 0;
  let less, greater;
  if (num1 < num2) {
    less = num1;
    greater = num2;
  } else {
    greater = num1;
    less = num2;
  }
  for (let i = less + 1; i <= greater; i++) {
    total += (i ** 3);
  }
  return total;
}

function cubeSummation(num1, num2) {
  let sum = 0;
  let min = Math.min(num1, num2);
  let max = Math.max(num1, num2);

  for (let i = min + 1; i <= max; i++) {
    sum += Math.pow(i, 3);
  }

  return sum;
}

module.exports = cubeSummation;