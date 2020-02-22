/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
    const height = rooms.length

    if (height === 0) {
        return rooms
    }

    const width = rooms[0].length
    const INF = 2147483647
    // 所有门
    const doors = []

    // 获取节点（门，房间）的所有子节点
    const getChildren = (node, hash) => {
        const { x, y } = node
        const children = []
        if (y - 1 >= 0 && rooms[y - 1][x].val === INF) {
            if (!hash.has(rooms[y - 1][x])) {
                hash.set(rooms[y - 1][x], true)
                children.push(rooms[y - 1][x])
            }
        }
        if (x - 1 >= 0 && rooms[y][x - 1].val === INF) {
            if (!hash.has(rooms[y][x - 1])) {
                hash.set(rooms[y][x - 1], true)
                children.push(rooms[y][x - 1])
            }
        }
        if (y + 1 <= height - 1 && rooms[y + 1][x].val === INF) {
            if (!hash.has(rooms[y + 1][x])) {
                hash.set(rooms[y + 1][x], true)
                children.push(rooms[y + 1][x])
            }
        }
        if (x + 1 <= width - 1 && rooms[y][x + 1].val === INF) {
            if (!hash.has(rooms[y][x + 1])) {
                hash.set(rooms[y][x + 1], true)
                children.push(rooms[y][x + 1])
            }
        }
        return children
    }

    // 广度优先搜索
    // 每一次只遍历同级的一层元素
    const bfs = (
        queue,
        hash,
        distance
    ) => {
        let temp = []
        // 每一次只遍历一层
        for (let i = 0; i < queue.length; i++) {
            if (distance < queue[i].distance ) {
                queue[i].distance = distance
            }
            const children = getChildren(queue[i], hash)
            temp = [...temp, ...children]
        }
        if (temp.length > 0) {
            bfs(temp, hash, distance + 1)
        }
    }

    // 遍历整个二维数组，并获取所有的门，并将内容替换做有坐标值的对象
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            const node = {
                x: j,
                y: i,
                val: rooms[i][j]
            }
            if (node.val === 0) {
               doors.push(node) 
            }
            if (node.val === INF) {
                node.distance = INF
            }
            // 进行替换
            rooms[i][j] = node
        }
    }

    for (let i = 0; i < doors.length; i++) {
        const hash = new Map()
        hash.set(doors[i], true)
        const temp = getChildren(doors[i], hash)
        bfs(temp, hash, 1)
    }

    // 还原数组
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            const {
                distance,
                val
            } = rooms[i][j]
            if (distance) {
                rooms[i][j] = distance 
            } else {
                rooms[i][j] = val
            }
        }
    }
};
