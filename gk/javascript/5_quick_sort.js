const array = [-5, -10, -1, -2, 1, 6, 7, 8, 4, 3, 2, 5, 7, 9, 7, 0, 3, 1, 2, 3];

/**
 *
 * @param {number[]} arr
 * @returns {number[]}
 */
function quck_sort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];

  const less = [];
  const greater = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      less.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }
  // return [...quck_sort(less), pivot, ...quck_sort(greater)]
  return quck_sort(less).concat([pivot], quck_sort(greater));
}

console.log(quck_sort(array));
