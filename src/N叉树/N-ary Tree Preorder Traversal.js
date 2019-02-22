/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    
    let result = []
    
    const iteration = (root) => {
        if (!root) return
        
        result.push(root.val)
        
        if (root.children) {
           for (let i = 0; i < root.children.length; i++) {
                iteration(root.children[i]) 
           } 
        }
    }
    
    iteration(root)
    
    return result
};