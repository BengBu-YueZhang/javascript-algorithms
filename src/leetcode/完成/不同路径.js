/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  // 思路1
  // let matrix = []
  // for (let i = 0; i < n; i++) {
  //   let arr = new Array(m).fill(1)
  //   matrix.push(arr)
  // }
  // for (let i = 1; i < n; i++) {
  //   for (let j = 1; j < m; j++) {
  //     matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1]
  //   }
  // }
  // return matrix[n-1][m-1]

  // 思路二
  // 可行
  // 但是会超出时间限制
  let arr = []
  let hashMap = new Map()
  for (let i = 0; i < m - 1; i++) {
    arr.push('m')
  }
  for (let i = 0; i < n - 1; i++) {
    arr.push('n')
  }

  if (arr.length <= 1) return 1

  function exchange (title, arr) {
    for (let i = 0; i < arr.length; i++) {
      let cloneArr = [...arr]
      let newFirst = [...title, ...cloneArr.splice(i, 1)]
      if (cloneArr && cloneArr.length) {
        exchange(newFirst, cloneArr)
      } else {
        let key = newFirst.join('')
        if (!hashMap.has(key)) {
          hashMap.set(key, true)
        }
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    let cloneArr = [...arr]
    let first = cloneArr.splice(i, 1)
    exchange(first, cloneArr)
  }


  return hashMap.size
};

console.log(
  uniquePaths(1, 2)
)
