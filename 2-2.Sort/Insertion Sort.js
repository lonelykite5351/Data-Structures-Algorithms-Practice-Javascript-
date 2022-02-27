const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    //move number to the first position
    if (array[i] < array[0]) {
      array.unshift(array.splice(i, 1)[0])
    }
    else {
      // only sort number smaller than number on the left of it. This is the part of insertion sort that makes it fast if the array is almost sorted.
      if (array[i] < array[i - 1]) {
        for (let j = 1; j < i; j++) {
          if (array[j - 1] <= array[i] && array[j] > array[i]) {
            array.splice(j, 0, array.splice(i, 1)[0])
          }
        }
      }
    }
  }
}

insertionSort(numbers);
console.log(numbers);