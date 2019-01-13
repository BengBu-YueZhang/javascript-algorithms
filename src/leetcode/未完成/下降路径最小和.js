/**
 * 最小下降路径
 * 
 * Given a square array of integers A, we want the minimum sum of a falling path through A.
 * A falling path starts at any element in the first row, and chooses one element from each row.
 * The next row's choice must be in a column that is different from the previous row's column by at most one.
 * 
 * https://leetcode.com/problems/minimum-falling-path-sum/
 */

/**
 * 方法1
 * ⚠️ 在大量数据下，执行时间超时，不是最优解
 */
/**
 * @param {number[][]} A
 * @return {number}
 */
// var minFallingPathSumMethod1 = function (A) {
//   let minPath = 0
//   if (A.length === 0) {
//     minPath = 0
//   } else {
//     let first = A[0]
//     let newA = [...A]
//     let arr = []
//     newA.splice(0, 1)
//     for (let i = 0; i < first.length; i++) {
//       if (first[i] === undefined) {
//         continue
//       }
//       if (newA.length) {
//         let start = i - 1 < 0 ? 0 : i - 1
//         let end = i + 1 > newA[0].length - 1 ? newA[0].length - 1 : i + 1
//         // 不能进行计算的位置填充undefined
//         let nextFirst = newA[0].map((item, index) => {
//           if (index < start || index > end) {
//             return undefined
//           } else {
//             return item
//           }
//         })
//         let nextA = [...newA]
//         nextA.splice(0, 1)
//         nextFirst = nextFirst.map(item => {
//           if (item !== undefined) {
//             item += first[i]
//           }
//           return item
//         })
//         // 递归
//         arr.push(minFallingPathSumMethod1([nextFirst, ...nextA]))
//       } else {
//         arr.push(first[i])
//       }
//     }
//     minPath = Math.min.apply(null, arr)
//   }
//   return minPath
// }

/**
 * 最优解，通过谷歌得知
 * 解析： https://www.geeksforgeeks.org/minimum-sum-falling-path-in-a-nxn-grid/
 */
var minFallingPathSumMethod2 = function (A) {
  let len = A[0].length
  let dp = []
  if (len === 1) {
    return A[0][0]
  }
  for (let i = 0; i < len; i++) {
    dp.push([])
  }
  for (let i = 0; i < len; i++) {
    dp[0][i] = A[0][i]
  }
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (j === 0) {
        dp[i][j] = A[i][j] + Math.min(dp[i - 1][j], dp[i - 1][j + 1])
      } else if (j === len - 1) {
        dp[i][j] = A[i][j] + Math.min(dp[i-1][j], dp[i-1][j-1])
      } else {
        dp[i][j] = A[i][j] + Math.min(Math.min(dp[i-1][j], dp[i-1][j+1]), dp[i-1][j-1])
      }
    }
  }
  return Math.min.apply(null, dp[len - 1])
}