/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    return helper(root, p, q)
};

function helper(root, p, q){
    if(root === null || root === p || root == q) return root
    
    var l = helper(root.left, p, q)
    var r = helper(root.right, p, q)
    
    if(l !== null && r !== null) return root
    if(l !== null) return l
    if(r !== null) return r
    return null
    
}