/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
// 滑动窗口
var minSubArrayLen = function (s, nums) {
  // 暴力法就不试了 :-(

  // 我个人的解法
  // 没有通过大量数据的测试
  // 执行时间超时
  //     const len = nums.length
  //     let start = 0
  //     let end = len - 1
  //     let sum = 0
  //     let width = end - start
  //     // 最小子数组的索引范围
  //     let minArr = []

  //     // 边界条件处理
  //     for (let i = 0; i < nums.length; i++) {
  //         if (nums[i] >= s) {
  //             return 1
  //         }
  //     }

  //     function getSum(start, end) {
  //         return nums.reduce((a, b, index) => {
  //             if (index >= start && index <= end) {
  //                 return a + b
  //             }
  //             return a + 0
  //         }, 0)
  //     }

  //     while (start <= end) {
  //         sum = getSum(start, end)
  //         if (sum >= s) {
  //             minArr = [start, end]
  //             // 窗口缩短, 并重置位置
  //             end = start + width - 1
  //             start = start
  //             width -= 1 
  //         } else {
  //             if (end < len - 1) {
  //                 // 窗口向前移动
  //                 end += 1
  //                 start += 1
  //             } else {
  //                 if (minArr.length >= 1) {
  //                     return minArr[1] - minArr[0] + 1
  //                 } else {
  //                     return 0
  //                 }
  //             }
  //         }
  //     }
  //     return 0

  let start = 0
  let end = -1
  // sum的和始终是两个指针之间的和
  let sum = 0
  let minLen = nums.length + 1

  while (start < nums.length) {
    if (sum < s && end + 1 < nums.length) {
      end += 1
      sum += nums[end]
    } else {
      sum -= nums[start]
      start += 1
    }
    if (sum >= s) {
      minLen = Math.min(minLen, end - start + 1)
    }
  }
  if (minLen === nums.length + 1) {
    return 0
  }
  return minLen
};