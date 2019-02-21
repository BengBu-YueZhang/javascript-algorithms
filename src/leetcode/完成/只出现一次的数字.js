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

// 异或运算符
// 3 ^ 3 => 0
// 0 ^ 3 => 3
// 3 ^ 3 ^ 4 ^ 4 ^ 2 => 2
// 3 ^ 2 ^ 3 => 2 (3 ^ 3 ^ 2 => 2)
// 0 ^ n => 0

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = 0
    for (let i = 0; i < nums.length; i++) {
        result = result ^ nums[i]
    }
    return result
};