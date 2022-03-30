/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false
  }

  const Hash = {}

  for (let i = 0; i < s.length; i++) {
    Hash[s[i]] ? Hash[s[i]]++ : Hash[s[i]] = 1
  }

  for (let i = 0; i < t.length; i++) {
    if (!Hash[t[i]]) {
      return false
    }
    Hash[t[i]]--
  }
  return true
};

// Time: O(2n)