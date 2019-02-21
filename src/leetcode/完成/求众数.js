/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let hashMap = new Map()
    let len = parseInt(nums.length / 2)
    for (let i = 0; i < nums.length; i++) {
        if (!hashMap.has(nums[i])) {
            hashMap.set(nums[i], 1)
        } else {
            hashMap.set(nums[i], hashMap.get(nums[i]) + 1)
        }
        if (hashMap.get(nums[i]) > len) {
            return nums[i]
        }
    }
};