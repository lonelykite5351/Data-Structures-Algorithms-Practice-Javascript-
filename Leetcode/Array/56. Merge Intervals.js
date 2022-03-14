/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length === 1) {
    return intervals
  }

  intervals = intervals.sort((a, b) => a[0] - b[0])    // O(nLogn)
  let result = [intervals[0]]

  for (let i = 1; i < intervals.length; i++) { // O(n)
    let start = intervals[i][0]
    let end = intervals[i][1]
    let previousStart = result[result.length - 1][0]
    let previousEnd = result[result.length - 1][1]

    if (previousEnd >= start) {
      result[result.length - 1][1] = Math.max(previousEnd, end)
    }
    else {
      result.push([start, end])
    }
  }
  return result
};

// Time complexity: O(nLogn)
// Space complexity: O(n)