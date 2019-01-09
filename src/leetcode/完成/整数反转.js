/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  // 笨办法，我也不清楚有什么更巧妙的办法
  let symbol = x > 0 ? true : false
  let arrx = (Math.abs(x) + '').split('').reverse()
  let newX = parseInt(arrx.join(''), 10)
  if (!symbol) {
      newX = 0 - newX
  }
  if (newX < -Math.pow(2, 31) || newX > Math.pow(2, 31) - 1) {
      return 0
  } else {
      return newX
  }
};