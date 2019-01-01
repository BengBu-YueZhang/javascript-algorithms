/**
 * 最长的斐波那契子序列的长度
 * https://leetcode-cn.com/problems/length-of-longest-fibonacci-subsequence/
 * min = Math.min(fibonacci(start, n), fibonacci(start, getNext(n)))
 */


 /**
 * 方法1
 * ⚠️ 在大量数据下，执行时间超时，不是最优解
 */
var lenLongestFibSubseq = function(A) {
  let maxLen = 0
let result = []
const len = A.length
 
const getNext = (current, startPos) => {
  if (startPos >= len - 1 && current.length <= 1) {
    return undefined
  } else if (startPos > len - 1 && current.length > 1) {
    return undefined
  } else {
    let sum = 0
    if (current.length > 1) {
      sum = current[current.length - 1] + current[current.length - 2]
    } else {
      sum = current[current.length - 1] + A[startPos]
    }
    let afterIndex = A.indexOf(sum)
    if (afterIndex < startPos + 1 && current.length <= 1) {
      return getNext(current, startPos + 1)
    } else if (afterIndex < startPos && current.length > 1) {
      return undefined
    } else {
      return {
        nextValue: A[startPos],
        nextIndex: startPos,
        afterValue: A[afterIndex],
        afterIndex: afterIndex
      }
    }
  }
}

const getFibonacci = (init, startPos) => {
  let fibonacci = [...init]
  let next = getNext(init, startPos)
  if (!next) {
    if (fibonacci.length > 1) {
      result.push(fibonacci)
    }
  } else {
    const { nextValue, afterValue, afterIndex } = next
    if (init.length > 1) {
      getFibonacci([...fibonacci, afterValue], afterIndex + 1)
    } else {
      getFibonacci([...fibonacci, nextValue, afterValue], afterIndex + 1)
    }
    getFibonacci([...fibonacci], startPos + 1)
  }
}
for (let i = 0; i < A.length - 2; i++) {
  getFibonacci([A[i]], i + 1)
}
  let lens = result.map(item => item.length)
  console.log(result)
  if (lens.length) {
    return Math.max.apply(null, lens)
  } else {
    return 0
  }
};

console.log(
  lenLongestFibSubseq( 
    [12,13,15,18,26,31,34,35,376,1709,1806,1967,1973,2145,2190,2312,2922,3183,3192,3471,3543,3741,4728,5150,5165,5616,5733,6053,7650,8333,8357,9087,9276,13483,13522,14703,15009,21816,21879,23790,24285,35299,35401,38493,39294,63579]
  )
)
