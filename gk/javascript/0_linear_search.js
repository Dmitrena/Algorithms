const array = [1, 4, 5, 6, 2, 3, 9, 11, 42];

/**
 *
 * @param {[]} array
 * @param {number} item
 * @returns
 */
function linear_search(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) return i;
  }
  return null;
}

console.log(linear_search(array, 5));
