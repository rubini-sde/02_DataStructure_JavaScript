// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

// Example 1:

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
// Example 2:

// Input: nums = [5], k = 1
// Output: 5.00000

function findMaxAverage(nums: number[], k: number): number {
  let windowSum = 0;
  let maxAvg = 0;

  // initial windowAvg
  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }

  maxAvg = windowSum / k;

  for (let end = k; end < nums.length; end++) {
    windowSum += nums[end]; // add the new element to the window
    windowSum -= nums[end - k]; // remove the first element from beginning of window
    maxAvg = Math.max(maxAvg, windowSum / k);
  }
  return maxAvg;
}
