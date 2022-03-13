/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // return number of target index
  //     if no exitst -> return -1
  // edge case: 
  //     nums.length is 0 -> -1
  //     nums is null -> -1

  if (nums.length === 0 || nums === null) {
    return -1
  }

  let leftIndex = 0
  let rightIndex = nums.length - 1

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((rightIndex + leftIndex) / 2)

    if (target === nums[middleIndex]) {
      return middleIndex
    }

    if (nums[leftIndex] <= nums[middleIndex]) {
      // left side
      if (target < nums[leftIndex] || target > nums[middleIndex]) {
        leftIndex = middleIndex + 1 // means target is in the right side
      }
      else {
        rightIndex = middleIndex - 1
      }
    }
    // right side
    else {
      if (target > nums[rightIndex] || target < nums[middleIndex]) {
        rightIndex = middleIndex - 1    // means target is in the left side
      }
      else {
        leftIndex = middleIndex + 1
      }
    }
  }
  return -1
};