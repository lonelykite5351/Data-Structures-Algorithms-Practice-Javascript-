/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  // return an array
  // In question, get an spiral order with clockwise, push in array
  // case:
  // m = 1, n = 5
  // [[1,2,3,4,5]] -> [1,2,3,4,5]

  // m = 1, n = 1
  // [[1]] -> [1]

  // m = 5, n = 1
  // [ [1],[2],[3],[4],[5] ] -> [1,2,3,4,5]

  let left = 0;
  let right = matrix[0].length - 1;
  let top = 0;
  let bottom = matrix.length - 1;

  let result = [];

  while (left <= right && top <= bottom) {
    // get every elements in the top row
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    // get every elements in the right column
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;

    if (left > right || top > bottom) {
      break;
    }

    // get every elements in the bottom row
    for (let i = right; i >= left; i--) {
      result.push(matrix[bottom][i]);
    }
    bottom--;

    // get every elements in the left column
    for (let i = bottom; i >= top; i--) {
      result.push(matrix[i][left]);
    }
    left++;
  }
  return result;
};

// Time complexity: O(m*n)
// Space complexity: O(1)

// https://leetcode.com/problems/spiral-matrix/