/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let hash = {}
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in hash) {
      return [hash[nums[i]], i]
    }
    else {
      const sum = target - nums[i]
      hash[sum] = i
    }
  }
};

// Time: O(n)
// Space: O(1)