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
   return checkHeight(root) !== false
};

function checkHeight(root){
    if(root === null) return 0
    
    var l = checkHeight(root.left)
    if(l === false) return false
    
    var r = checkHeight(root.right)
    if(r === false) return false
    
    if(Math.abs(l- r) > 1) return false
    return Math.max(l, r) + 1
}