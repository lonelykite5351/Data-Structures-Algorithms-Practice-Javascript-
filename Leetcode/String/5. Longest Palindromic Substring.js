/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length <= 1) {
    return s;
  }

  let maxLength = 0;
  let result = "";

  // Time: O(n)
  for (let i = 0; i < s.length; i++) {
    let Left = 0;
    let Right = 0;

    // Odd Length
    Left = i;
    Right = i;
    // O(n)
    while (Left >= 0 && Right < s.length && s[Left] === s[Right]) {
      if (Right - Left + 1 > maxLength) {
        maxLength = Right - Left + 1;
        result = s.slice(Left, Right + 1);
      }
      Left--;
      Right++;
    }

    // Even Length
    Left = i;
    Right = i + 1;
    while (Left >= 0 && Right < s.length && s[Left] === s[Right]) {
      if (Right - Left + 1 > maxLength) {
        maxLength = Right - Left + 1;
        result = s.slice(Left, Right + 1);
      }
      Left--;
      Right++;
    }
  }
  return result;
};

// Time complexity: O(n^2)
// Space complexity: O(1)
