/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let output = []
  let prefix = 1
  let postfix = 1
  const length = nums.length

  // Time: O(n)
  // Space: O(1)
  for (let i = 0; i < length; i++) {
    output[i] = prefix
    prefix *= nums[i]
  }

  for (let i = 1; i <= length; i++) {
    output[length - i] *= postfix
    postfix *= nums[length - i]
  }
  return output
};