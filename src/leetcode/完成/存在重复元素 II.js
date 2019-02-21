/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// 给定一个整数数组，判断数组中是否有两个不同的索引 i 和 j，使得 nums [i] 和 nums [j] 的差的绝对值最大为 t，并且 i 和 j 之间的差的绝对值最大为 ķ。
var containsNearbyDuplicate = function(nums, k) {
    let hashMap = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (!hashMap.has(nums[i])) {
            hashMap.set(nums[i], i)
        } else {
            let prev = hashMap.get(nums[i])
            let current = i
            if (Math.abs(current - prev) <= k) {
                return true
            } else if (Math.abs(current - prev) > k) {
                hashMap.set(nums[i], i)
            }
        }
    }
    return false 
};