/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  // hash表
  // 异或运算符
  let hashMap = new Map()
  
  let result
  
  for (let i = 0; i < nums.length; i++) {
      if (!hashMap.has(nums[i])) {
          hashMap.set(nums[i], 1)
      } else {
          hashMap.set(nums[i], hashMap.get(nums[i]) + 1)
      }
  }
  
  [...hashMap.entries()].forEach(item => {
      if (item[1] === 1) {
          result = item[0]
      }
  })
  return result
};
