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
var postorder = function(root) {
    let result = []
    
    const iteration = (root) => {
        if (!root) return
        
        if (root.children) {
            for (let i = 0; i < root.children.length; i++) {
                iteration(root.children[i])
            }
        }
        
        result.push(root.val)
    }
    
    iteration(root)
    
    return result
};