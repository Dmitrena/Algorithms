// [1,1,2,2,3,4,5,5] => [3,4]

/**
 *
 * @param {array} array
 */
function withoutRepeat(array) {
  //O(N*N)
  const result = [];

  for (let i = 0; i < array.length; i++) {
    let count = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[i] === array[j]) {
        count++;
      }
    }
    if (count === 1) {
      result.push(array[i]);
    }
  }
  return result;
}

console.log(withoutRepeat([1, 1, 2, 2, 3, 4, 5, 5]));

/**
 *
 * @param {array} array
 */
function linearWithoutRepeat(array) {
  const result = [];
  const dictionary = {};
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    dictionary[item] = dictionary[item] ? dictionary[item] + 1 : 1;
  }
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (dictionary[item] === 1) {
      result.push(item);
    }
  }
  return result;
}

console.log(linearWithoutRepeat([1, 1, 2, 2, 3, 4, 5, 5]));
