/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let top = 0
  let bottom = matrix.length - 1
  let left = 0
  let right = matrix[0].length - 1
  let midRow = 0

  while (top <= bottom) {
    midRow = Math.floor((top + bottom) / 2)
    if (target === matrix[midRow][0]) {
      return true
    }
    else if (target > matrix[midRow][0] && target <= matrix[midRow][right]) {
      break
    }

    if (target > matrix[midRow][0]) {
      top = midRow + 1
    }
    else if (target < matrix[midRow][0]) {
      bottom = midRow - 1
    }
  }

  while (left <= right) {
    const midCol = Math.floor((left + right) / 2)
    if (target > matrix[midRow][midCol]) {
      left = midCol + 1
    }
    else if (target < matrix[midRow][midCol]) {
      right = midCol - 1
    }
    else {
      return true
    }
  }
  return false
};