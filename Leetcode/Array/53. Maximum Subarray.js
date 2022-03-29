var maxSubArray = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  let currentSum = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum += nums[i];
    currentSum = Math.max(nums[i], currentSum);
    max = Math.max(max, currentSum);
  }
  return max;
};

// Time: O(n)
// Space: O(1)

// https://leetcode.com/problems/maximum-subarray/