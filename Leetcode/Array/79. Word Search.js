/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {


  if (word.length === 0) {
    return true
  }

  const Rows = board.length
  const Columns = board[0].length

  // Find the first word in board, if true then run DFS function.
  // O(m * n)
  for (let row = 0; row < Rows; row++) {
    for (let col = 0; col < Columns; col++) {
      if (board[row][col] === word[0]) {
        if (DFS(0, row, col)) {
          return true
        }
      }
    }
  }
  return false

  // DFS recursive
  function DFS(wordIndex, rowIndex, colIndex) {

    // It means the word has already found.
    if (wordIndex === word.length) {
      return true
    }

    // if row or column not exist(or out of range)
    if (!board[rowIndex] || !board[rowIndex][colIndex]) {
      return false
    }

    if (board[rowIndex][colIndex] === word[wordIndex] && board[rowIndex][colIndex] !== "is already visited") {
      const temp = board[rowIndex][colIndex]
      board[rowIndex][colIndex] = "is already visited"

      // search current word Up
      if (DFS(wordIndex + 1, rowIndex - 1, colIndex)) {
        return true
      }

      // search Down
      if (DFS(wordIndex + 1, rowIndex + 1, colIndex)) {
        return true
      }

      // search Left
      if (DFS(wordIndex + 1, rowIndex, colIndex - 1)) {
        return true
      }

      // search Right
      if (DFS(wordIndex + 1, rowIndex, colIndex + 1)) {
        return true
      }

      // if any direction not find the next word, back tracking.
      board[rowIndex][colIndex] = temp
    }


    return false
  }
};

// DFS call stack
// Time complexity: O(m*n*DFS) + 4^word.length
//              --> O(m*n*4^word.length)

// Space complexity: O(1)


// https://leetcode.com/problems/word-search/