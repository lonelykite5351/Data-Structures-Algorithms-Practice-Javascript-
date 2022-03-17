/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 1) {
    return nums[0]
  }

  const record = [nums[0]]    // Space: O(n)

  // Time: O(n)
  for (let i = 1; i < nums.length; i++) {
    const choiceSelf = i - 2 < 0 ?
      nums[i] : nums[i] + record[i - 2]
    const choicePrev = record[i - 1]
    const choiceMax = Math.max(choiceSelf, choicePrev)
    record.push(choiceMax)
  }
  return record[record.length - 1]
};

//Time complexity: O(n)
//Space complexity: O(n)