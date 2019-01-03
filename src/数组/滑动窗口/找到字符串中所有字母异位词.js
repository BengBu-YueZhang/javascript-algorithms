/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  // 我的初版, 在数据量特别的大的情况下会超出时间限制
  // const pLen = p.length
  // const pArr = p.split('')
  // const pSort = pArr.sort().join('')
  // const sLen = s.length
  // let start = 0
  // let end = pLen - 1
  // let result = []
  // while (end < sLen) {
  //   let ns = s.slice(start, end + 1).split('').sort().join('')
  //   if (ns === pSort) {
  //     result.push(start)
  //   }
  //   start += 1
  //   end += 1
  // }
  // return result
};