/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // nums1, nums2均是有序数组

    let i = 0
    let j = 0
    
    nums1.splice(m)
    
    while (j < n) {
        if (i >= nums1.length) {
            nums1.push(nums2[j])
            i++
            j++
        } else {
            if (nums1[i] > nums2[j]) {
                nums1.splice(i, 0, nums2[j])
                i++
                j++
            } else {
                i++
            }
        }
    }
};