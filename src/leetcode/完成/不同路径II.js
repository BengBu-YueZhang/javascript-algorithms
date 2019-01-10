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
};