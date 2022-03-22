/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let grid = [];

  // push first row and first column 1.
  for (row = 0; row < m; row++) {
    const rowArray = [];
    for (col = 0; col < n; col++) {
      rowArray.push(1);
    }
    grid.push(rowArray);
  }

  // strat loop in [1][1] to plus from top and left
  for (row = 1; row < m; row++) {
    for (col = 1; col < n; col++) {
      // find top and left
      grid[row][col] = grid[row - 1][col] + grid[row][col - 1];
    }
  }

  return grid[m - 1][n - 1];
};

// Time: O(m * n)
// Space: O(m * n)
