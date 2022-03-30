/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  if (p.length > s.length) {
    return []
  }

  const [sHash, pHash] = [{}, {}]
  let alp = 'abcdefghijklmnopqrstuvwxyz'.split('')

  // Fill a-z in two Hash Table.
  // Time: O(26*2) --> O(1)
  for (let i = 0; i < alp.length; i++) {
    sHash[alp[i]] = 0
    pHash[alp[i]] = 0
  }

  // Time: O(p)
  for (let i = 0; i < p.length; i++) {
    pHash[p[i]]++
    sHash[s[i]]++
  }

  let left = 0
  const res = compareHash(sHash, pHash) ? [0] : []

  // check and compare two hash table is the same. Time: O(26)
  function compareHash(sHash, pHash) {
    return JSON.stringify(sHash) === JSON.stringify(pHash) ? true : false
  }

  // Sliding Window, right pointer start with p's length on string, then move right and left pointer keep going until the end.
  // O(s-p)
  for (let right = p.length; right < s.length; right++) {
    sHash[s[right]]++
    sHash[s[left]]--
    left++
    if (compareHash(sHash, pHash)) {
      res.push(left)
    }
  }
  return res
};

// Time: O((s+p)*26) --> O(s+p)