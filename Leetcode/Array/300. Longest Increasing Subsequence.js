/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let LIS = []
  const length = nums.length

  for (let i = length - 1; i >= 0; i--) {
    LIS[i] = 1
    for (let j = i + 1; j < length; j++) {
      if (nums[i] < nums[j]) {
        LIS[i] = Math.max(LIS[i], 1 + LIS[j])
      }
    }
  }
  return Math.max(...LIS)
};

// Time complexity: O(n^2)

// https://leetcode.com/problems/longest-increasing-subsequence/