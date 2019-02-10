/**
 * BFS遍历即可
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  let result = []
  const traversing = (node, level) => {
    if (!node) return
    if (!result[level]) result[level] = []
    result[level].push(node.val)
    if (node.left) {
      traversing(node.left, level + 1)
    }
    if (node.right) {
      traversing(node.right, level + 1)
    }
  }
  traversing(root, 0)
  return result.length
};

// 前序遍历
// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number}
//  */
// var maxDepth = function (root) {
//   let result = 0
//   const traversing = (node, level) => {
//     if (!node) return
//     if (node.left) {
//       traversing(node.left, level + 1)
//     }
//     if (node.right) {
//       traversing(node.right, level + 1)
//     }
//     if (level > result) {
//       result = level
//     }
//   }
//   traversing(root, 1)
//   return result
// }

// 后序遍历
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// /**
//  * @param {TreeNode} root
//  * @return {number}
//  */
// var maxDepth = function (root) {
//   if (!root) return 0
//   const traversing = (node) => {
//     if (!node) return
//     if (!node.left && !node.right) {
//       node.depth = 1
//       return
//     }
//     if (node.left) {
//       traversing(node.left)
//     }
//     if (node.right) {
//       traversing(node.right)
//     }
//     let max_left_depth = 0
//     let max_right_depth = 0
//     if (node.left) {
//       max_left_depth = node.left.depth
//     }
//     if (node.right) {
//       max_right_depth = node.right.depth
//     }
//     node.depth = Math.max(max_left_depth, max_right_depth) + 1
//   }
//   traversing(root)
//   return root.depth
// }