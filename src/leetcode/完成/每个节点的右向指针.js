/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function (root) {
  // BFS
  let result = []
  const traversing = (node, level) => {
    if (!node) return
    if (!result[level]) result[level] = []
    result[level].push(node)
    if (node.left) {
      traversing(node.left, level + 1)
    }
    if (node.right) {
      traversing(node.right, level + 1)
    }
  }
  traversing(root, 0)
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result[i].length; j++) {
      if (j + 1 < result[i].length) {
        result[i][j].next = result[i][j + 1]
      } else {
        result[i][j].next = null
      }
    }
  }
};