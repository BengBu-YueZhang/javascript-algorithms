/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  // 思路1, 使用动态规划和递归
  // 没有通过大数据量的测试用例
  // let counter = 0
  // const targetX = obstacleGrid[0].length - 1
  // const targetY = obstacleGrid.length - 1
  // /**
  //  * @param {number} x 当前矩阵的x坐标
  //  * @param {number} y 当前矩阵的y坐标
  //  * @param {string} direction 方向 right, bottom
  //  */
  // const pathfinding = (x, y, direction) => {
  //   switch (direction) {
  //     case 'right':
  //       x = x + 1
  //       break
  //     case 'bottom':
  //       y = y + 1
  //       break
  //     default:
  //       break
  //   }
  //   // 遇到障碍物或者越界的情况下, 思路一条
  //   if (y >= targetY + 1) {
  //     return
  //   }
  //   if (x >= targetX + 1) {
  //     return
  //   }
  //   if (obstacleGrid[y][x] === 1) {
  //     return
  //   }
  //   if (x === targetX && y === targetY) {
  //     counter += 1
  //   } else if (x !== targetX && y === targetY) {
  //     // 只能向右走
  //     pathfinding(x, y, 'right')
  //   } else if (x === targetX && y !== targetY) {
  //     // 只能向下走
  //     pathfinding(x, y, 'bottom')
  //   } else {
  //     // 可能向右走
  //     // 可能向下走
  //     pathfinding(x, y, 'right')
  //     pathfinding(x, y, 'bottom')
  //   }
  // }
  // pathfinding(0, 0)
  // return counter

  // 思路二
  // 带有条件的初始化第一行与第一列
  // 初始化x方向
  // 初始化y方向
  const xLen = obstacleGrid[0].length
  const yLen = obstacleGrid.length
  for (let i = 0; i < xLen; i++) {
    if (i - 1 >= 0) {
      if (obstacleGrid[0][i-1] === 0) {
        obstacleGrid[0][i] = 0
      } else if (obstacleGrid[0][i-1] === 1 && obstacleGrid[0][i] !== 1) {
        obstacleGrid[0][i] = 1
      } else if (obstacleGrid[0][i] == 1) {
        obstacleGrid[0][i] = 0
      }
    } else {
      if (obstacleGrid[0][i] === 0) {
        obstacleGrid[0][i] = 1
      } else {
        obstacleGrid[0][i] = 0
      }
    }
  }
  for (let i = 0; i < yLen; i++) {
    if (i - 1 >= 0) {
      if (obstacleGrid[i-1][0] === 0) {
        obstacleGrid[i][0] = 0
      } else if (obstacleGrid[i-1][0] !== 0 && obstacleGrid[i][0] !== 1) {
        obstacleGrid[i][0] = 1
      } else if (obstacleGrid[i-1][0] !== 0 && obstacleGrid[i][0] === 1) {
        obstacleGrid[i][0] = 0
      }
    }
  }
  for (let i = 1; i < yLen; i++) {
    for (let j = 1; j < xLen; j++) {
      if (obstacleGrid[i][j] === 1) {
        obstacleGrid[i][j] = 0
      } else {
        obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1]
      }
    }
  }

  return obstacleGrid[yLen - 1][xLen - 1]
};