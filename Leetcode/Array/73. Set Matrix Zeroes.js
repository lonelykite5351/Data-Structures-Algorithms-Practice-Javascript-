/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  // Space: O(1)
  let rowZero = false;

  let Rows = matrix.length;
  let Columns = matrix[0].length;

  // To mark which row and column should be set zeros.
  // Time: O(m*n)
  for (let row = 0; row < Rows; row++) {
    for (let column = 0; column < Columns; column++) {
      if (matrix[row][column] === 0) {
        matrix[0][column] = 0;
        if (row > 0) {
          matrix[row][0] = 0;
        } else {
          rowZero = true;
        }
      }
    }
  }

  // read row0 and column0, set zeros
  for (let row = 1; row < Rows; row++) {
    for (let column = 1; column < Columns; column++) {
      if (matrix[0][column] === 0 || matrix[row][0] === 0) {
        matrix[row][column] = 0;
      }
    }
  }

  // if [0][0] = 0, set every column0 blocks to 0.
  if (matrix[0][0] === 0) {
    for (let row = 0; row < Rows; row++) {
      matrix[row][0] = 0;
    }
  }

  // Finally, set row0, set every row0 blocks to 0.
  if (rowZero) {
    for (let column = 0; column < Columns; column++) {
      matrix[0][column] = 0;
    }
  }

  return matrix;
};

// https://leetcode.com/problems/set-matrix-zeroes/
