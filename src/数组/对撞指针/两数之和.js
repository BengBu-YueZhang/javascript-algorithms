/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // O(2n)的复杂度
  // 有序数组可以使用对撞指针
  let hashMap = new Map()
  for (let i = 0; i < nums.length; i++) {
      if (!hashMap.has(nums[i])) {
          hashMap.set(nums[i], i)
      }
  }
  for (let i = 0; i < nums.length; i++) {
      let diff = target - nums[i]
      if (hashMap.has(diff) && hashMap.get(diff) !== i) {
          return [i, hashMap.get(diff)]
      }
  }
};