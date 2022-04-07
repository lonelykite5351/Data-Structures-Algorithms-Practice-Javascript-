/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  // const DP = new Array(text1.length + 1).fill(new Array(text2.length + 1).fill(0))

  const DP = [];
  for (let i = 0; i < text1.length + 1; i++) {
    const rowArray = [];
    for (let j = 0; j < text2.length + 1; j++) {
      rowArray.push(0);
    }
    DP.push(rowArray);
  }

  const Rows = DP.length;
  const Columns = DP[0].length;

  for (let r = Rows - 2; r >= 0; r--) {
    for (let c = Columns - 2; c >= 0; c--) {
      if (text2[c] === text1[r]) {
        DP[r][c] = 1 + DP[r + 1][c + 1];
      } else {
        DP[r][c] = Math.max(DP[r + 1][c], DP[r][c + 1]);
      }
    }
  }
  return DP[0][0];
};

// https://leetcode.com/problems/longest-common-subsequence/
