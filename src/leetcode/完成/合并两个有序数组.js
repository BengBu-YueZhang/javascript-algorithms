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

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // nums1, nums2均是有序数组
    
    nums1.splice(m)
    
    let reuslt = []
    
    let i = 0
    
    let j = 0
    
    // 归并拍讯
    while (i < m && j < n) {
        if (nums1[i] < nums2[j]) {
            reuslt.push(nums1[i])
            i++
        } else if (nums1[i] > nums2[j]) {
            reuslt.push(nums2[j])
            j++
        } else {
            reuslt.push(nums1[i])
            reuslt.push(nums2[j])
            i++
            j++
        }
    }
    
    if (i < m) {
        reuslt = [...reuslt, ...nums1.slice(i)]
    } else if (j < n) {
        reuslt = [...reuslt, ...nums2.slice(j)]
    }
    
    for (let k = 0; k < reuslt.length; k++) {
        nums1[k] = reuslt[k]
    }
};