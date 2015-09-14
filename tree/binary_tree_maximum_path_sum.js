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
    return helper(root).maxPath
}

function helper(root){
    if(root === null) 
    //b/c you don't want to take my max path when i'm null
    return {
        singlePath: 0,
        maxPath: -Infinity
    }
    
    var l = helper(root.left)
    var r = helper(root.right)
    
    var singlePath = Math.max(l.singlePath + root.val, r.singlePath + root.val, 0)
    var maxPath = Math.max(l.singlePath+root.val+r.singlePath, l.maxPath, r.maxPath)
    
    return{
        singlePath: singlePath,
        maxPath: maxPath
    }
}