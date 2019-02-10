/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  let result = []
  const traversing = (root, sum) => {

    if (!root) return false

    if (!root.left && !root.right && root.val === sum) {
      result.push(root.val)
    }

    if (root.left) {
      traversing(root.left, sum - root.val)
    }

    if (root.right) {
      traversing(root.right, sum - root.val)
    }

  }

  traversing(root, sum)
  return result.length > 0
};