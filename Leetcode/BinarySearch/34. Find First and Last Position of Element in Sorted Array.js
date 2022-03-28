// My solution
var searchRange = function (nums, target) {
  if (nums.length === 0) {
    return [-1, -1];
  }

  let left = 0;
  let right = nums.length - 1;
  let mid = Math.floor((left + right) / 2);
  const res = [];

  // O(logn)
  while (left <= right) {
    if (nums[mid] === target) {
      let tempMid = mid;
      // O(n/2)
      while (nums[mid] === target) {
        mid--;
      }
      res.push(mid + 1);

      mid = tempMid;
      // O(n/2)
      while (nums[mid] === target) {
        mid++;
      }
      res.push(mid - 1);
      return res;
    }

    if (nums[mid] < target) {
      left = mid + 1;
    }
    if (nums[mid] > target) {
      right = mid - 1;
    }
    mid = Math.floor((left + right) / 2);
  }
  return [-1, -1];
};

// Time: O(n + logn) ?

// ---------------------Neetcode’s solution--------------------- //

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  function binarySearch(nums, target, searchBias) {
    let left = 0;
    let right = nums.length - 1;
    let index = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (target > nums[mid]) {
        left = mid + 1;
      } else if (target < nums[mid]) {
        right = mid - 1;
      } else {
        index = mid;
        if (searchBias === "goLeft") {
          right = mid - 1;
        } else if (searchBias === "goRight") {
          left = mid + 1;
        }
      }
    }
    return index;
  }

  // Time: O(2*logn) --> O(logn)
  const start = binarySearch(nums, target, "goLeft");
  const end = binarySearch(nums, target, "goRight");

  return [start, end];
};
