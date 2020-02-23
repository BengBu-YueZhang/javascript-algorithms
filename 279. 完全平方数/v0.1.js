/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {

    let num = 0
    const squareNumber = []

    for (let i = 1; i * i <= n; i++) {
        squareNumber.push(i * i)
    }

    const getKey = (keys) => {
        return keys.sort((a, b) => a - b).join(',')
    }

    const bfs = (hash, num, queue) => {
        let tempQueue = []

        num += 1

        for (let i = 0; i < queue.length; i++) {
            const { val, parent, key } = queue[i]
            let tempSum = parent + val
            if (tempSum > n) {
                continue
            } else if (tempSum < n) {
                let nextQueue = []
                for (let i = 0; i < squareNumber.length; i++) {
                    let newKey = getKey([...key, squareNumber[i]])
                    if (
                        tempSum + squareNumber[i] <= n &&
                        !hash.has(newKey)
                    ) {
                        hash.set(newKey, true)
                        nextQueue.push({
                           val: squareNumber[i],
                           parent: tempSum,
                           key: newKey
                        })
                    }

                }
                tempQueue = [
                    ...tempQueue,
                    ...nextQueue
                ]
            } else {
                return num
            }
        }

        if (tempQueue.length) {
            return bfs(hash, num, tempQueue)
        }
    }

    // 避免 1-9，9-1这样重复的计算
    const hash = new Map()

    return bfs(hash, num, squareNumber.map(n => ({
        val: n,
        parent: 0,
        key: [0, n]
    })))
};
