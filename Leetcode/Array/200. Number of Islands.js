/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  if (grid.length === 0) {
    return 0;
  }

  const Rows = grid.length;
  const Columns = grid[0].length;
  let islands = 0;

  // Time: O(n*4) --> current node should be search 4 path.
  // Space: O(n+4)
  function BFS(currentRow, currentColumn) {
    grid[currentRow][currentColumn] = "is visited";
    const queue = [[currentRow, currentColumn]]; // Space: O(n)
    
    // Up, Down, Left, Right. Space: O(4)
    const searchPath = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ]; 

    while (queue.length > 0) {
      const [dequeRow, dequeCol] = queue.shift();

      // search 4 path.
      for (let i = 0; i < searchPath.length; i++) {
        let [r, c] = searchPath[i];
        r += dequeRow;
        c += dequeCol;
        if (
          r >= 0 &&
          r < Rows &&
          c >= 0 &&
          c < Columns &&
          grid[r][c] === "1" &&
          grid[r][c] !== "is visited"
        ) {
          grid[r][c] = "is visited";
          queue.push([r, c]);
        }
      }
    }
  }

  // Time: O(n)
  // Space: O(1)
  for (let row = 0; row < Rows; row++) {
    for (let col = 0; col < Columns; col++) {
      if (grid[row][col] === "1" && grid[row][col] !== "is visited") {
        BFS(row, col);
        islands++;
      }
    }
  }
  return islands;
};

// Time complexity: O(4n) --> O(n)
// Space complexity: O(n + 4) --> O(n)
