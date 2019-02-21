/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let hash = new Map()
    let result = new Map()
    for (let i = 0; i < nums1.length; i++) {
        if (!hash.has(nums1[i])) {
            hash.set(nums1[i], 1)
        }
    }
    for (let i = 0; i < nums2.length; i++) {
        if (hash.has(nums2[i]) && !result.has(nums2[i])) {
            result.set(nums2[i], 1)
        }
    }
    return [...result.keys()]
};