/**
 * 最长的斐波那契子序列的长度
 * https://leetcode-cn.com/problems/length-of-longest-fibonacci-subsequence/
 * min = Math.min(fibonacci(start, n), fibonacci(start, getNext(n)))
 */

var lenLongestFibSubseq = function (A) {
  let maxLen = 0
  let result = []
  const len = A.length

  /**
   * 获取下一个fibonacci数列的值
   * @param {*} preValue 前一个fibonacci数列的值
   * @param {*} startPos 开始查找的位置
   */
  const getNext = (preValue, startPos) => {
    if (startPos >= len - 1) {
      return undefined
    } else {
      let sum = preValue + A[startPos]
      let nextIndex = A.indexOf(sum)
      if (nextIndex < startPos + 1) {
        return getNext(preValue, startPos + 1)
      } else {
        return {
          nextValue: A[startPos],
          nextIndex: startPos,
          afterNextValue: A[nextIndex],
          afterNextIndex: nextIndex
        }
      }
    }
  }

  const getFibonacci = (init, startPos) => {
    let fibonacci = [...init]
    let next = getNext(init[init.length - 1], startPos)
    if (!next) {
      result.push(fibonacci)
    } else {
      const { nextValue, afterNextValue, afterNextIndex } = next
      // 使用next
      getFibonacci([...fibonacci, nextValue, afterNextValue], afterNextIndex + 1)
      // 不使用next
      getFibonacci([...fibonacci], startPos + 1)
    }
  }
  for (let i = 0; i < A.length - 2; i++) {
    getFibonacci([A[i]], ++i)
  }
  let lens = result.map(item => item.length)
  console.log(result)
  return Math.max.apply(null, lens)
};

console.log(
  lenLongestFibSubseq(
    [2,4,5,6,7,8,11,13,14,15,21,22,34]
  )
)