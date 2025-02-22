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
