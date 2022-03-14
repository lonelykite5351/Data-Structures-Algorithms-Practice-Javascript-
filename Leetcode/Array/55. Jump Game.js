/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  
  
  //----Greedy Solution-------------------------------
  //     Time complexity: O(n)
  //     Space complexity: O()

  if (nums.length === 1) {
    return true;
  }

  let goalIndex = nums.length - 1;

  for (let i = goalIndex - 1; i >= 0; i--) {
    if (i + nums[i] >= goalIndex) {
      goalIndex = i;
    }
  }
  return goalIndex === 0 ? true : false;
};


// https://leetcode.com/problems/jump-game/