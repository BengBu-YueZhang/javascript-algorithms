// https://leetcode-cn.com/explore/orignial/card/all-about-array/232/two-pointers/969/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  if (height.length === 1 || height.length === 0) {
    return 0
  }
  // 暴力解决
  // 超出内存限制
  // let waterCapacity = []
  // for (let i = 0; i < height.length; i++) {
  //     for (let j = i + 1; j < height.length; j++) {
  //         let w = j - i
  //         let h = Math.min(height[i], height[j])
  //         let capacity = w * h
  //         waterCapacity.push(capacity)
  //     }
  // }
  // return Math.max.apply(null, waterCapacity)

  // 对撞指针
  // 对撞指针可以减少很多不必要的计算，指针一个在头，一个在尾，保证了宽度每次都是最大的情况
  // 比如
  // start = 10
  // end = 5
  // 相距 10
  // 以end作为高的最大面积 5 * 10，因为它最高是5，而这时计算了最宽的宽度的情况下，在以end作为高计算都是重复且没有必要的

  const len = height.length
  let start = 0
  let end = len - 1
  let max = 0
  while (start < end) {
    max = Math.max(max, (Math.min(height[start], height[end]) * (end - start)))
    if (height[start] <= height[end]) {
      start += 1
    } else {
      end -= 1
    }
  }

  return max

};