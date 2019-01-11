/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  if (nums.length <= 3) return nums
  nums = nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i]
    let start = i + 1
    let end = nums.length - 1
    let min = 9999999
    while (start < end) {
    }
  }  
};
