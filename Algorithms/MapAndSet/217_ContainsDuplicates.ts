// Given an integer array nums, return true if any value appears at least twice in the array, 
// and return false if every element is distinct.

function containsDuplicates(nums: number[]): boolean {
  const set = new Set(nums);
  return nums.length > set.size;
}
