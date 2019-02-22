/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 写的臭
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function (t1, t2) {
    
    console.log(t1)
    
    console.log(t2)

    // 采用递归，每次都相加根节点即可

    let t = {}

    const iteration = (t1, t2, tree) => {
        if (t1 && t2) {
            tree.val = t1.val + t2.val
            
            if (t1.left && t2.left) {
                tree.left = {}
                iteration(t1.left, t2.left, tree.left)
            } else if (t1.left && !t2.left) {
                tree.left = t1.left
            } else if (!t1.left && t2.left) {
                tree.left = t2.left
            } else {
                tree.left = null
            }
            
            if (t1.right && t2.right) {
                tree.right = {}
                iteration(t1.right, t2.right, tree.right)
            } else if (t1.right && !t2.right) {
                tree.right = t1.right
            } else if (!t1.right && t2.right) {
                tree.right = t2.right
            } else {
                tree.right = null
            }
            
        } else {
            if (t1 && !t2) {
                tree.val = t1.val
                tree.left = t1.left
                tree.right = t1.right
            } else if (!t1 && t2) {
                tree.val = t2.val
                tree.left = t2.left
                tree.right = t2.right
            }
        }
        
    }

    iteration(t1, t2, t)
    
    if (Object.keys(t).length) {
        return t
    } else {
        return null
    }
    
    return t
};