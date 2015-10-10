/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    if(root === null) return 0
    return helper(root).maxPath
};

function helper(root){
    if(root === null){
        return{
            'singlePath': 0,
            'maxPath': -Infinity
        }
    }
    
    var l = helper(root.left)
    var r = helper(root.right)
    
    var singlePath = Math.max(0, l.singlePath + root.val, r.singlePath + root.val)
    var maxPath = Math.max(l.singlePath + root.val + r.singlePath, l.maxPath, r.maxPath)
    
    return {
        'singlePath':singlePath,
        'maxPath': maxPath
    }
}