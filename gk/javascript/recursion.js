/**
 *
 * @param {number} x
 */
function factorial(x) {
  if (x === 1) {
    return 1;
  }
  return x * factorial(x - 1);
}

console.log(factorial(5));

function fibonacci(n) {
  if (n === 1 || n === 2) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(8));
