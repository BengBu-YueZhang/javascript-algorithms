// 使用对撞指针法
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  // 删除空格以及标点符号
  s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  let arrS = s.split('')
  let start = 0
  let end = s.length - 1
  while (start < end) {
      if (arrS[start] === arrS[end]) {
          start += 1
          end -= 1
      } else {
          return false
      }
  }
  return true
};