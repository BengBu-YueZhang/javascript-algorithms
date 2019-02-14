/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  if (!root) return true

  // 中序DFS
  let result = []

  const iteration = (root) => {
    if (root.left) {
      iteration(root.left)
    }
    result.push(root.val)
    if (root.right) {
      iteration(root.right)
    }
  }
  iteration(root)
  let resultString = result.join(',')
  let result2String = [...new Set(result.sort((a, b) => a - b))].join(',')
  return resultString === result2String
};