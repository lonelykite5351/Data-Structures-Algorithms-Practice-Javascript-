/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {

  // [[1]]
  if (matrix.length === 1) {
    return matrix
  }

  let left = 0
  let right = matrix.length - 1

  while (left < right) {   //O(n)

    for (let i = 0; i < right - left; i++) { //O(n)    
      let top = left
      let bottom = right

      // save the topLeft
      let topLeft = matrix[top][left + i]

      // bottomLeft move to topLeft
      matrix[top][left + i] = matrix[bottom - i][left]

      // bottomRight move to bottomLeft
      matrix[bottom - i][left] = matrix[bottom][right - i]

      // topRight move to bottomRight
      matrix[bottom][right - i] = matrix[top + i][right]

      // topLeft move to topRight
      matrix[top + i][right] = topLeft
    }
    left++
    right--
  }
  return matrix
};

// Time complexity: O(n^2)
// Space complexity: O(1)