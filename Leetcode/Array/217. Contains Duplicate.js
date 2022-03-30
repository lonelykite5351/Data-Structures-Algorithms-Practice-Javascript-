var containsDuplicate = function (nums) {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]]) {
      return true;
    } else {
      hash[nums[i]] = true;
    }
  }
  return false;
};

// https://leetcode.com/problems/contains-duplicate/