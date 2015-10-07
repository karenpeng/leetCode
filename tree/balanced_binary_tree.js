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
var isBalanced = function(root) {
    if(root === null) return true
    return helper(root) !== false
};

function helper(root){
    if(root === null) return 0
    
    var l = helper(root.left)
    var r = helper(root.right)
    
    if(l === false || r === false) return false
    
    if(Math.abs(l - r) > 1) return false
    
    return Math.max(l, r) + 1
}