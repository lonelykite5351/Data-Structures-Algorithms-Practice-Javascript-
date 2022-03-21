/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length <= 1) {
    return false;
  }

  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ")") {
      const pop = stack.pop();
      if (pop !== "(") {
        return false;
      }
    } else if (s[i] === "]") {
      const pop = stack.pop();
      if (pop !== "[") {
        return false;
      }
    } else if (s[i] === "}") {
      const pop = stack.pop();
      if (pop !== "{") {
        return false;
      }
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length === 0 ? true : false;
};

// Time: O(n)
// Space: O(n)

// https://leetcode.com/problems/valid-parentheses/