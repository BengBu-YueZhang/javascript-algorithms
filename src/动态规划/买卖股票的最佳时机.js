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
};
