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

    const bfs = (num, queue) => {
        let tempQueue = []

        num += 1

        for (let i = 0; i < queue.length; i++) {
            const { val, parent } = queue[i]
            let tempSum = parent + val
            if (tempSum > n) {
                continue
            } else if (tempSum < n) {
                tempQueue = [
                    ...tempQueue,
                    ...squareNumber.map(n => ({
                        val: n,
                        parent: tempSum
                    }))
                ]
            } else {
                return num
            }
        }

        if (tempQueue.length) {
            return bfs(num, tempQueue)
        }

    }

    return bfs(num, squareNumber.map(n => ({
        val: n,
        parent: 0
    })))
};
