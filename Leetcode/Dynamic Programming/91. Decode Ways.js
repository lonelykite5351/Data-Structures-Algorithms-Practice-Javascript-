/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  let DP = new Array(s.length + 1).fill(1)

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === "0") {
      DP[i] = 0
    }
    else {
      DP[i] = DP[i + 1]
    }

    if (i + 1 < s.length &&
      s[i] === "1" ||
      s[i] === "2" && /[0123456]/.test((s[i + 1]))) {
      DP[i] += DP[i + 2]
    }
  }
  return DP[0]
};

// Time: O(n)
// https://leetcode.com/problems/decode-ways/