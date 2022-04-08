/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const DP = new Array(s.length + 1).fill(false);
  DP[DP.length - 1] = true;

  for (let i = s.length - 1; i >= 0; i--) {
    for (let w = 0; w < wordDict.length; w++) {
      const wLen = wordDict[w].length;
      if (i + wLen <= s.length && s.slice(i, i + wLen) === wordDict[w]) {
        DP[i] = DP[i + wLen];
      }
      if (DP[i]) {
        break;
      }
    }
  }
  return DP[0];
};

// https://leetcode.com/problems/word-break/