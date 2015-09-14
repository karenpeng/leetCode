/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if(root === null) return []
    var s = ''
    var result = []
    helper(root, s, result)
    return result
};

function helper(root, s, result){
    if(root === null) return
    s += ('->' + root.val)
    if(root.left === null && root.right === null) result.push(s.substring(2, s.length))
    
    helper(root.left, s, result)
    helper(root.right, s, result)
}