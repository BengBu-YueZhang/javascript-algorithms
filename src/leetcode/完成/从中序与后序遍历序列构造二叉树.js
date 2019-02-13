// 从中序与后序遍历序列构造二叉树, 从前序与中序遍历序列构造二叉树的思路类似
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    let binaryTree = {}
   
  const iteration = (postorder, inorder, tree) => {
       
      if (!postorder.length) {
          binaryTree = null
          return
      }
       
      tree.val = null
      tree.left = {
          val: null,
          left: null,
          right: null
      }
      tree.right = {
          val: null,
          left: null,
          right: null
      }

     // 前序遍历第一个节点为当前树的根节点
     let rootVal = postorder.splice(postorder.length - 1, 1)[0]
     // 中序遍历根节点的索引
     let rootIndex = inorder.indexOf(rootVal)
     // 中序遍历的左子树
     let inorderLeftTree = inorder.slice(0, rootIndex)
     // 中序遍历的右子树
     let inorderRightTree = inorder.slice(rootIndex + 1)
     // 前序遍历的左子树
     let postorderLeftTree = postorder.slice(0, inorderLeftTree.length)
     // 前序遍历的右子树
     let postorderRightTree = postorder.slice(inorderLeftTree.length)

       
     tree.val = rootVal
      
     if (postorderLeftTree.length === 1 || inorderLeftTree.length === 1) {
         tree.left.val = postorderLeftTree[0]
     } else if (postorderLeftTree.length > 1 || inorderLeftTree.length > 1) {
         iteration(postorderLeftTree, inorderLeftTree, tree.left)
     } else {
          tree.left = null
     }
       
     if (postorderRightTree.length === 1 || inorderRightTree.length === 1) {
         tree.right.val = postorderRightTree[0]
     } else if (postorderRightTree.length > 1 || inorderRightTree.length > 1) {
         iteration(postorderRightTree, inorderRightTree, tree.right)
     } else {
      tree.right = null
     }
  }
   
  iteration(postorder, inorder, binaryTree)
   
  return binaryTree
};