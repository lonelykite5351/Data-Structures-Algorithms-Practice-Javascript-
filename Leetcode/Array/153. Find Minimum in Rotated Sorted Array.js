var findMin = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  let [left, right] = [0, nums.length - 1];
  let res = nums[0];

  while (left <= right) {
    if (nums[left] < nums[right]) {
      res = Math.min(res, nums[left]);
      break;
    }

    const mid = Math.floor((left + right) / 2);
    res = Math.min(res, nums[mid]);
    if (nums[left] <= nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return res;
};

// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/