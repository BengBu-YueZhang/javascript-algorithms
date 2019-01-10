/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if (nums.length <= 1) return nums[0]
  let sum = nums[0]
  let MAX = sum
  let start = 0
  for (let i = 1; i < nums.length; i++) {
      if (sum >= 0) {
          if (sum + nums[i] >= MAX) {
              MAX = sum + nums[i]   
          }
          sum = sum + nums[i]
      } else {
          if (nums[i] >= MAX) {
             MAX = nums[i]  
          }
          sum = nums[i]
      }
  }
  return MAX
};