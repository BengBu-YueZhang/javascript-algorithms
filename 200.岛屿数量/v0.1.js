/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const nums = 0
    const height = grid.length
    if (height === 0) {
        return nums
    }
    const width = grid[0].length
    const lands = []

    const getNextLands = (land, hash) => {
        const { x, y } = land
        const lands = []
        if (y - 1 >= 0) {
            const land = rooms[y - 1][x]
            if (!hash.has(land) && land.value === 1) {
                hash.set(land, true)
                children.push(land)
            }
        }
        if (x - 1 >= 0) {
            const land = rooms[y][x - 1]
            if (!hash.has(land) && land.value === 1) {
                hash.set(land, true)
                children.push(land)
            }
        }
        if (y + 1 <= height - 1) {
            const land = rooms[y + 1][x]
            if (!hash.has(land) && land.value === 1) {
                hash.set(land, true)
                children.push(land)
            }
        }
        if (x + 1 <= width - 1) {
            const land = rooms[y][x + 1]
            if (!hash.has(land) && land.value === 1) {
                hash.set(land, true)
                children.push(land)
            }
        }
        return lands
    }

    const bfs = (queue, hash) => {
        let temp = []
        for (let i = 0; i < queue.length; i++) {
            const lands = getNextLands(queue[i], hash)
            temp = [...temp, lands]
            queue[i].value = 0
        }
        if (temp.length > 0) {
            bfs(temp, hash)
        }
    }

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            const land = {
                x: j,
                y: i,
                value: grid[i][j]
            }
            grid[i][j] = land
            if (land.value === 1) {
                lands.push(land)
            }
        }
    }

    for (let i = 0; i < lands.length; i++) {
        const land = lands[i]
        if (land.value === 1) {
            nums += 1
            const hash = new Map()
            hash.set(land, true)
            const temp = getNextLands(land, hash)
            land.value = 0
            bfs(temp, hash)
        } else {
            continue
        }
    }

    return nums
};


numIslands(
    [
        ["1","1","1","1","0"],
        ["1","1","0","1","0"],
        ["1","1","0","0","0"],
        ["0","0","0","0","0"]
    ]
)