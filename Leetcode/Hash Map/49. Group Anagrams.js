/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  // Space: O(n)
  const newMap = new Map()

  for (let i = 0; i < strs.length; i++) {
    // Every word sort: O(mlogn), m is word's length, strs's length = n
    // Total Time complexity: O(n * mlogm)
    const sortedWord = strs[i].split('').sort().join('')
    if (newMap.has(sortedWord)) {
      newMap.get(sortedWord).push(strs[i])
    }
    else {
      newMap.set(sortedWord, [strs[i]])
    }
  }

  return [...newMap.values()]
};

// Time complexity: O(n * mlogm)
// Space complexity: O(n)

// https://leetcode.com/problems/group-anagrams/