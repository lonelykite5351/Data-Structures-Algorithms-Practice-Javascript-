const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// O(n^2)
function bubbleSort(array) {
  const arrayLength = array.length
  for(let i = 0; i < arrayLength; i++) {
    for(let j = 0; j < arrayLength; j++) {
      if(array[j] > array[j+1]) {
        let temp = array[j]
        array[j] = array[j+1]
        array[j+1] = temp
      }
    }
  }
  return array
}

bubbleSort(numbers);
console.log(numbers);