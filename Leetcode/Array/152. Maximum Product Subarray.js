/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let max = 1;
  let min = 1;
  let maxResult = Math.max(...nums);

  if (nums.length === 1) {
    return nums[0];
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      max = 1;
      min = 1;
      continue;
    }
    const tempMax = nums[i] * max;
    const tempMin = nums[i] * min;
    max = Math.max(tempMax, tempMin, nums[i]);
    min = Math.min(tempMax, tempMin, nums[i]);
    maxResult = Math.max(max, maxResult);
  }
  return maxResult;
};

// Time complexity: O(n)
// Space complity: O(1)

// https://leetcode.com/problems/maximum-product-subarray/