/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    if(root === null) return null
    var result = []
    return inorder(root, k, result)
};

function inorder(root, k, result){
    if(root === null) return
    var l = inorder(root.left, k, result)
    if(typeof l === 'number') return l
    result.push(root.val)
    if(result.length === k)return result[result.length-1]
    var r = inorder(root.right, k, result)
    if(typeof r === 'number') return r
}