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
