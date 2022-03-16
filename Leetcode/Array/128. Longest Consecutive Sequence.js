/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length <= 1) {
    return nums.length
  }

  const newSet = new Set()
  nums.map((e) => newSet.add(e))  // O(n)
  let longest = 0

  // O(n)
  for (let i = 0; i < nums.length; i++) {

    // Check array number, if current number-1 exist in Set, that means it's not the start sequence.
    if (!newSet.has(nums[i] - 1)) {
      let count = 0
      while (newSet.has(nums[i] + count)) {    // O(count) --> O(1)
        count++
      }
      longest = Math.max(count, longest)
    }
  }
  return longest
};

// Time complexity: O(n)
// Space complexity: O(n)

// https://leetcode.com/problems/longest-consecutive-sequence/