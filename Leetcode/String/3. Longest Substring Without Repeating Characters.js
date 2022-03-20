/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) {
    return 0
  }

  // sliding window
  let maxLength = 0
  let leftPointer = 0
  let newSet = new Set()

  for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {
    while (newSet.has(s[rightPointer])) {
      newSet.delete(s[leftPointer])
      leftPointer++
    }
    newSet.add(s[rightPointer])
    maxLength = Math.max(maxLength, rightPointer - leftPointer + 1)
  }
  return maxLength
};

// Time: O(n)
// Space: O(n)

// https://leetcode.com/problems/longest-substring-without-repeating-characters/submissions/