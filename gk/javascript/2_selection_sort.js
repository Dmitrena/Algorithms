const arr = [
  0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3,
  32,
]; // [0,1,1,2,3.......]
let count = 0;

function selectionSort(array) {
  //O(n*n)
  for (let i = 0; i < array.length; i++) {
    let indexMin = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexMin]) {
        indexMin = j;
      }
    }
    let tmp = array[i];
    array[i] = array[indexMin];
    array[indexMin] = tmp;
  }
  return array;
}

console.log("1", selectionSort(arr));

function findSmallest(arr) {
  let smallest = arr[0];
  let smallest_index = 0;

  for (let i = 0; i < array.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallest_index = i;
    }
  }
  return smallest_index;
}

/**
 *
 * @param {array} arr
 */
function selection_sort(arr) {
  const newArr = [];

  for (let i = 0; i < array.length; i++) {
    let smallest = findSmallest(arr);
    newArr.append(arr.pop(smallest));
  }
  return newArr;
}

console.log("2", selectionSort(arr));
