/**
 * Checks if the input word is a palindrome.
 * @param {string} word - The word to check.
 * @returns {boolean} True if palindrome, otherwise false.
 */
function palindrom(word) {
  word = word.toLowerCase();

  return word === word.split("").reverse().join("");
}

console.log(palindrom("aa aabbaa aa"));

/**
 * Checks if the input string is a palindrome, ignoring punctuation, spaces, and case.
 * @param {string} str - The string to check.
 * @returns {boolean} True if palindrome, otherwise false.
 */
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
}

console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
