/**
 * 最长的斐波那契子序列的长度
 * https://leetcode-cn.com/problems/length-of-longest-fibonacci-subsequence/
 * min = Math.min(fibonacci(start, n), fibonacci(start, getNext(n)))
 */

var lenLongestFibSubseq = function(A) {
  let maxLen = 0
let result = []
const len = A.length
 
const getNext = (current, startPos) => {
  if (startPos >= len - 1) {
    return undefined
  } else {
    let sum = 0
    if (current.length > 1) {
      sum = current[current.length - 1] + current[current.length - 2]
    } else {
      sum = current[current.length - 1] + A[startPos]
    }
    let nextIndex = A.indexOf(sum)
    if (nextIndex < startPos + 1) {
      return getNext(current, startPos + 1)
    } else {
      return {
        nextValue: A[startPos],
        nextIndex: startPos,
        afterValue: A[nextIndex],
        afterIndex: nextIndex
      }
    }
  }
}

const getFibonacci = (init, startPos) => {
  let fibonacci = [...init]
  let next = getNext(init, startPos)
  if (!next) {
    result.push(fibonacci)
  } else {
    const { nextValue, afterValue, afterIndex } = next
    // 使用next
    getFibonacci([...fibonacci, nextValue, afterValue], afterIndex + 1)
    // 不使用next
    getFibonacci([...fibonacci], startPos + 1)
  }
}
for (let i = 0; i < A.length - 2; i++) {
  getFibonacci([A[i]], i + 1)
}
  let lens = result.map(item => item.length)
  console.log(result)
  return Math.max.apply(null, lens)
};

console.log(
  lenLongestFibSubseq( 
    [2,4,7,8,9,10,14,15,18,23,32,50]
  )
)
