/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    var result = []
    if(root === null) return result
    helper(root, result)
    return result
};

function helper(root, result){
    if(root === null) return
    helper(root.left, result)
    result.push(root.val)
    helper(root.right, result)
}