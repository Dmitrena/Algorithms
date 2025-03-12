const array = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 4, 6, 2, 9, 12];

/**
 *
 * @param {array} array
 */
function bubble_sort(array) {
  //)(n*n)
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j + 1] < array[j]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
  }
  return array;
}

console.log(bubble_sort(array));
