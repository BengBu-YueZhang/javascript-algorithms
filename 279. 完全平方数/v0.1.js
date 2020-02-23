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

    const bfs = (hash, num, queue) => {
        let tempQueue = []

        num += 1

        for (let i = 0; i < queue.length; i++) {
            const { val, parent } = queue[i]

            let tempSum = parent + val

            if (tempSum === n) {
                return num
            }

            if (tempSum > n) {
                // 如果大于直接减枝
                continue
            } else {
                let nextQueue = []
                for (let i = 0; i < squareNumber.length; i++) {
                    let newKey = tempSum + squareNumber[i]
                    if (tempSum + squareNumber[i] <= n) {
                        // 如果重复计算直接减枝
                        if (!hash.has(newKey)) {
                            hash.set(newKey, true)
                            nextQueue.push({
                                val: squareNumber[i],
                                parent: tempSum
                            })
                        }
                    } else {
                        continue
                    }
                }
                tempQueue = [
                    ...tempQueue,
                    ...nextQueue
                ]
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
        parent: 0
    })))
};
