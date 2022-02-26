const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  const arrayLength = array.length
  for (let i = 0; i < arrayLength; i++) {
    let temp = array[i]
    let minIndex = i
    for (let j = i + 1; j < arrayLength; j++) {
      if (array[minIndex] > array[j]) {
        minIndex = j
      }
    }
    array[i] = array[minIndex]
    array[minIndex] = temp
  }
  return array
}

selectionSort(numbers)
console.log(numbers);