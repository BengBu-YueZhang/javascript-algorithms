/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  // Manacher算法
  // Manacher算法的介绍, https://www.cnblogs.com/grandyang/p/4475985.html
  // p[n]等于 n位置的回文字符串的半径
  // 🌟 最长子串的长度是p[n] - 1
  // n - p[n]
  // 动态规划
  // 中心扩展算法
};