/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  if (intervals.length === 0) {
    return [newInterval]
  }

  let result = []

  for (let i = 0; i < intervals.length; i++) {
    const start = intervals[i][0]
    const end = intervals[i][1]

    // newInterval end value is less than the intervals start value, there will be no overlap until end.
    if (newInterval[1] < start) {
      result.push(newInterval)
      return result.concat(intervals.slice(i))
    }
    else if (newInterval[0] > end) {
      result.push(intervals[i])
    }
    else {
      newInterval = [Math.min(start, newInterval[0]), Math.max(end, newInterval[1])]
    }
  }
  result.push(newInterval)
  return result
};

// Time: O(n)
// Space: O(n)