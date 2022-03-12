/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // 1. return type -> Combine Array
  // 2. edge case 
  //     []
  //     [0]
  //     null
  // 3. 


  // ---------------O(n^2)---------------------------

  // O(1)
  if (nums.length <= 2 || nums === null) {
    return []
  }
  nums = nums.sort((a, b) => a - b)
  let result = []


  for (let i = 0; i < nums.length - 1; i++) { // O(n)
    let leftPointer = i + 1;
    let rightPointer = nums.length - 1

    if (nums[i] === nums[i - 1]) {
      continue
    }

    while (leftPointer < rightPointer) {   //O(n)
      const threeSum = nums[i] + nums[leftPointer] + nums[rightPointer]
      if (threeSum < 0) {
        leftPointer++
      }
      else if (threeSum > 0) {
        rightPointer--
      }
      else {
        result.push([nums[i], nums[leftPointer], nums[rightPointer]])
        leftPointer++
        while (nums[leftPointer] === nums[leftPointer - 1] && leftPointer < rightPointer) {
          leftPointer++
        }
      }
    }
  }
  return result
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
console.log(threeSum([-2, -2, 0, 0, 2, 2]))