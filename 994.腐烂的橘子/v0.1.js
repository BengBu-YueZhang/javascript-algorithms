/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const height = grid.length

    if (height === 0) {
        return -1
    }

    const width = grid[0].length

    // 烂橘子
    const rottenOranges = []

    const getChildren = (node, hash) => {
        const { x, y } = node
        const oranges = []
        if (y - 1 >= 0) {
            const orange = grid[y - 1][x]
            if (!hash.has(orange) && orange.value === 1) {
                hash.set(orange, true)
                oranges.push(orange)
            }
        }
        if (x - 1 >= 0) {
            const orange = grid[y][x - 1]
            if (!hash.has(orange) && orange.value === 1) {
                hash.set(orange, true)
                oranges.push(orange)
            }
        }
        if (y + 1 <= height - 1) {
            const orange = grid[y + 1][x]
            if (!hash.has(orange) && orange.value === 1) {
                hash.set(orange, true)
                oranges.push(orange)
            }
        }
        if (x + 1 <= width - 1) {
            const orange = grid[y][x + 1]
            if (!hash.has(orange) && orange.value === 1) {
                hash.set(orange, true)
                oranges.push(orange)
            }
        }
        return oranges
    }

    const bfs = (queue, hash, date) => {
        let temp = []
        for (let i = 0; i < queue.length; i++) {
            const orange = queue[i]
            // 尝试获取最快的腐败时间
            if (date < orange.date || !orange.date) {
                orange.date = date
            }
            // orange.value = 2
            const tep = getChildren(orange, hash)
            temp = [...temp, ...tep]
        }
        if (temp.length > 0) {
            bfs(temp, hash, date + 1)
        }
    }
  
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            const oranges = {
                x: j,
                y: i,
                value: grid[i][j],
                date: 0 // 腐烂的时间
            }
            grid[i][j] = oranges
            if (oranges.value === 2) {
                rottenOranges.push(oranges)
            }
        }
    }

    for (let i = 0; i < rottenOranges.length; i++) {
        // 从每一个烂橘子开始bfs
        const rottenOrange = rottenOranges[i]
        const hash = new Map()
        hash.set(rottenOrange, true)
        const temp = getChildren(rottenOrange, hash)
        bfs(temp, hash, 1)
    }

    let date = 0
    // 拿到腐败时间（就是date最大的值）
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (grid[i][j].value === 1 && grid[i][j].date === 0) {
                return -1
            } else {
                if (grid[i][j].date > date) {
                    date = grid[i][j].date
                }
            }
        }
    }

    return date
};
