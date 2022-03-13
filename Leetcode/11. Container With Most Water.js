/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {

  // The array can't pre sort.
  // return number(integer)
  // edge case:
  //     [] -> 0
  //     [0, 0, 0] -> 0
  //     null -> 0
  //     [1,1] -> 1

  // index = index + 1


  if (height.length <= 1 || height === null) { //O(1)
    return 0
  }

  //-------brute force solution------------------------------------------------

  // Time Complexity: O(n^2)
  // Space Complexity: O(1)

  //     let result = 0
  //     for(let i = 0; i < height.length; i++) {    //O(n)
  //         for(let j = i + 1; j < height.length; j++){ //O(n)
  //             let area = 0
  //             if(height[i] <= height[j]) {
  //                 area = height[i] * (j - i)
  //             }
  //             else if(height[i] > height[j]) {
  //                 area = height[j] * (j - i)
  //             }

  //             if(area > result) {
  //                 result = area
  //             }
  //         }
  //     }
  //     return result

  //-------Optimized solution(Two Pointer Technique)------------------------------------------------

  // Time complexity: O(n)
  // Space complexity: O(1)

  // O(1)
  let leftPointer = 0
  let rightPointer = height.length - 1
  let result = 0

  while (leftPointer < rightPointer) { //O(n)
    const currentArea = Math.min(height[leftPointer], height[rightPointer]) * (rightPointer - leftPointer)  // O(1)
    if (currentArea > result) {  // O(1)
      result = currentArea
    }

    if (height[leftPointer] < height[rightPointer]) {    // O(1)
      leftPointer++
    }
    else if (height[leftPointer] >= height[rightPointer]) {  // O(1)
      rightPointer--
    }
  }
  return result
};