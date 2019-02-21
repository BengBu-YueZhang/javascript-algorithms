/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let hashMap = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (!hashMap.has(nums[i])) {
            hashMap.set(nums[i], 1)
        } else {
            return true
        }
    }
    return false
};
