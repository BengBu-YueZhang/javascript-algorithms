/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let result = 0

    coins = coins.sort((a, b) => a - b)

    // 优先使用最大的
    for (let i = coins.length - 1; i >= 0; i--) {
        const change = coins[i]
        if (amount === 0) {
            break
        }
        if (change <= amount) {
            result += parseInt(amount / change)
            amount = amount % change
            console.log(result, amount)
        } else {
            continue
        }
    }

    if (amount === 0) {
        return result
    } else {
        return -1
    }
};