#!/usr/bin/node
const args = process.argv.slice(2);
const n = parseInt(args[0]);

function factorial(n) {
  if (n === 0 || isNaN(n)) {
    return 1;
  } else {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}

console.log(factorial(n));

