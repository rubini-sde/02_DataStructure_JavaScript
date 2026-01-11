// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

function isPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !isAlphaNumeric(s.charAt(left))) {
      left++;
    }
    while (left < right && !isAlphaNumeric(s.charAt(right))) {
      right--;
    }
    if (s.charAt(left).toLowerCase() !== s.charAt(right).toLowerCase()) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

function isAlphaNumeric(c: string): boolean {
  const code = c.charCodeAt(0);
  return (
    (code >= "a".charCodeAt(0) && code <= "z".charCodeAt(0)) ||
    (code >= "A".charCodeAt(0) && code <= "Z".charCodeAt(0)) ||
    (code >= "0".charCodeAt(0) && code <= "9".charCodeAt(0))
  );
}
