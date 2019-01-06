/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 递归
  // 必然超出时间限制
  // if (prices.length === 0) return 0  

  // const hashMap = new Map()
  // const len = prices.length

  // const getProfit = (buy, day) => {
  //   if (day === len) {
  //     return 0
  //   }
  //   return Math.max.apply(null, [
  //     prices[day] - buy,
  //     getProfit(buy, day + 1)
  //   ])
  // }

  // for (let i = 0; i < prices.length; i++) {
  //   hashMap.set(i, getProfit(prices[i], i + 1))
  // }

  // return Math.max.apply(null, [...hashMap.values()])

  // ------------------

  // 执行用时: 1568 ms, 在Best Time to Buy and Sell Stock的JavaScript提交中击败了8.08% 的用户 
  // ～～～～ 真实
  // if (prices.length === 0) return 0

  // let hashMap = new Map()

  // for (let i = 0; i < prices.length; i++) {
  //   hashMap.set(
  //     i,
  //     i < prices.length - 1 ? Math.max.apply(null, prices.slice(i + 1)) - prices[i] : 0
  //   )
  // }

  // return Math.max.apply(null, [...hashMap.values()])

  // ------------------

  if (prices.length === 0) return 0  
    
  let result = 0
  
  let min = prices[0]
  // 找到最小的谷之后的最大的峰
  for (let i = 0; i < prices.length; i++) {
      if (prices[i] < min) {
          min = prices[i]   
      }
      result = Math.max(prices[i] - min, result)
  } 
  
  return result
};
