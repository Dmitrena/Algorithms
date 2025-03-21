// 1, 1, 2, 3, 5, 8, 13 ...
// f(n) = f(n - 1) + f (n - 2)

/**
 * Computes the Fibonacci number at position n using a naive recursive approach.
 *
 * The Fibonacci sequence is defined as:
 *   F(1) = 1, F(2) = 1, and for n > 2: F(n) = F(n-1) + F(n-2).
 *
 * @param {number} n - The position in the Fibonacci sequence.
 * @returns {number} The Fibonacci number at position n.
 *
 * @complexity
 * Time: O(2^n) - Exponential due to repeated recalculations.
 * Space: O(n) - Maximum depth of the recursion stack.
 */
function recusriveFibonachi(n) {
  if (n <= 0) return 0;
  if (n <= 2) return 1;
  return recusriveFibonachi(n - 1) + recusriveFibonachi(n - 2);
}

console.log("recursiveFibonachi", recusriveFibonachi(6)); // Expected output: 8

/**
 * Computes the Fibonacci number at position n using recursion with memoization.
 *
 * @param {number} n - The position in the Fibonacci sequence.
 * @param {Object} [memo={}] - An object to cache previously computed Fibonacci numbers.
 * @returns {number} The Fibonacci number at position n.
 *
 * @complexity
 * Time: O(n) - Each number from 1 to n is computed only once.
 * Space: O(n) - For storing computed values in the memo object and the recursion stack.
 */
function recFibonacci(n, memo = {}) {
  if (n <= 0) return 0;
  if (n in memo) return memo[n];
  if (n <= 2) return 1;

  memo[n] = recFibonacci(n - 1, memo) + recFibonacci(n - 2, memo);
  return memo[n];
}

console.log("recFibonacci with memoization", recFibonacci(6)); // Expected output: 8

/**
 * Computes the Fibonacci number at position n using an iterative approach.
 *
 * This method uses a loop to build up the Fibonacci sequence from the base cases.
 * It starts with F(1) = 1 and F(2) = 1, then iterates from 3 up to n,
 * updating two temporary variables that store the last two Fibonacci numbers.
 *
 * The Fibonacci sequence is defined as:
 *   F(1) = 1, F(2) = 1, and for n > 2: F(n) = F(n-1) + F(n-2).
 *
 * @param {number} n - The position in the Fibonacci sequence.
 * @returns {number} The Fibonacci number at position n.
 *
 * @complexity
 * Time: O(n) - A single loop from 3 to n.
 * Space: O(1) - Only a few variables are used, regardless of n.
 */
function iterationFibonacci(n) {
  if (n <= 0) return 0;
  if (n <= 2) return 1;

  let a = 1; // F(1)
  let b = 1; // F(2)
  for (let i = 3; i <= n; i++) {
    const c = a + b; // Compute F(i)
    a = b;
    b = c;
  }
  return b;
}

console.log("iterationFibonacci", iterationFibonacci(6)); // Expected output: 8
