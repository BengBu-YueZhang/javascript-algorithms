/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
    let result = 0
    let temp = 0
    const sums = []

    for (let i = nums.length - 1; i >= 0; i--) {
        temp += nums[i]
        sums[i] = temp
    }

    const needPruning = (val, level) => {
        return Math.abs(S - val) > sums[level] 
    }

    const dfs = (parentValue, level) => {

        if (level >= nums.length) {
            return
        }

        const currentVal = nums[level]
        const currentSum = parentValue + currentVal
        const currentDifference = parentValue - currentVal

        if (
            currentSum === S &&
            level === nums.length - 1
        ) {
            result += 1
        }

        if (
            currentDifference === S &&
            level === nums.length - 1
        ) {
            result += 1
        }

        if (
            level + 1 <= nums.length - 1 &&
            !needPruning(
                currentSum,
                level + 1
            )
        ) {
            dfs(currentSum, level + 1)
        }

        if (
            level + 1 <= nums.length - 1 &&
            !needPruning(
                currentDifference,
                level + 1
            )
        ) {
            dfs(currentDifference, level + 1)
        }
    }

    dfs(0, 0)

    return result
};
