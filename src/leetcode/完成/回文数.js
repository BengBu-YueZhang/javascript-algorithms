/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  // 不是什么很巧妙的办法
  // 笨办法
  // 笨办法，我也不清楚有什么更巧妙的办法
  let symbol = x > 0 ? true : false
  let newX = parseInt((Math.abs(x) + '').split('').reverse().join(''), 10)
  if (!symbol) {
      newX = `-${newX}`
      x = `-${x}`
  }
  return newX === x
};