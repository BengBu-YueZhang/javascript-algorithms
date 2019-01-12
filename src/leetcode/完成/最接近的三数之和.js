/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 控制o(n*n)的复杂度
var threeSumClosest = function(nums, target) {
  let diff = Infinity
  let sums = undefined
  if (nums.length <= 3) return nums.reduce((a, b) => a + b, 0)
  nums = nums.sort((a, b) => a - b)
  // console.log(nums)
  for (let i = 0; i < nums.length; i++) {
    let start = i + 1
    let end = nums.length - 1
    while (start < end) {
      if (Math.abs(target - (nums[i] + nums[start] + nums[end])) < diff) {
         sums = nums[i] + nums[start] + nums[end]
         // 当前最小的差值
         diff = Math.abs(target - (nums[i] + nums[start] + nums[end]))
      }
      if (nums[i] + nums[start] + nums[end] > target) {
          end -= 1
      } else if (nums[i] + nums[start] + nums[end] < target) {
          start += 1
      } else {
          return target
      }
    }
  }
  return sums
};
