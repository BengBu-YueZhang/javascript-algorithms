/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  // 归并，合并两个数组，然后球中位数
  let newArr = []
  let i = 0
  let j = 0
  let m = nums1.length
  let n = nums2. length
  
   while (i < m && j < n) {
      if (nums1[i] < nums2[j]) {
          newArr.push(nums1[i])
          i++
      } else if (nums1[i] > nums2[j]) {
          newArr.push(nums2[j])
          j++
      } else {
          newArr.push(nums1[i])
          newArr.push(nums2[j])
          i++
          j++
      }
  }
  
  if (i < m) {
      newArr = [...newArr, ...nums1.slice(i)]
  } else if (j < n) {
      newArr = [...newArr, ...nums2.slice(j)]
  }
  
  let s = newArr.length
  
  
  if (s % 2 !== 0) {
      console.log('11111')
      let middle = parseInt(s / 2)
      return newArr[middle]
  } else {
      console.log('22222')
      let middle1 = parseInt(s / 2)
      let middle2 = parseInt(s / 2) - 1
      console.log(middle1)
      console.log(middle2)
      return (newArr[middle1]  + newArr[middle2]) / 2
  }
};