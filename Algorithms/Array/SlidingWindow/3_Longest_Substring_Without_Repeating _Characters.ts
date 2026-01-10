// Given a string s, find the length of the longest substring without duplicate characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

function lengthOfLongestSubstring(s: string): number {
  let left = 0;
  let maxLength = 0;
  const map = new Map<string, number>();
  // iterate thru the array
  for (let right = 0; right < s.length; right++) {
    // if duplicate exists in window, move left pointer to the last seen index + 1 to remove it from the window
    if (map.has(s[right])) {
      left = Math.max(left, map.get(s[right])! + 1);
    }
    // if no duplicate exists, add the value to the map
    map.set(s[right], right);
    // set the maxLength
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}
