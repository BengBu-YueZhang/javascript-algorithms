/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  // Manacher算法
  // Manacher算法的介绍, https://www.cnblogs.com/grandyang/p/4475985.html
  // 本代码也是根据这篇文章，写出来的。
  // p[n]等于 n位置的回文字符串的半径
  // 🌟 最长子串的长度是p[n](最大半径) - 1
  // 最长子串的起始位置为n - p[n] / 2
  // 更多的是一种技巧性的思路
  // Manacher算法最核心的代码 mx > i ? min(p[2 * id - i], mx - i) : 1
  if (s.length <= 1) return s
  let newS = s.split('')
  let p = []
  newS[0] = `$#${newS[0]}`
  for (let i = 0; i < newS.length; i++) {
    newS[i] = `${newS[i]}#`
  }
  newS = newS.join('')
  for (let i = 0; i < newS.length; i++) {
    p.push(0)
  }
  let id = 0
  let mx = 0
  let maxStart = 0
  let maxLen = 0
  for (let i = 1; i < newS.length; i++) {
    p[i] = mx > i ? Math.min(p[2 * id - i], mx - i) : 1
    while (newS[i + p[i]] === newS[i - p[i]]) p[i] += 1
    if (mx < i + p[i]) {
      mx = i + p[i]
      id = i
    }
    if (maxLen < p[i]) {
      maxLen = p[i]
      maxStart = i
    }
  }
  return s.substr(Math.ceil((maxStart - p[maxStart]) / 2), maxLen - 1)
};
