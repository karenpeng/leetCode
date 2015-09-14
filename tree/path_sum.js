/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if(root === null) return false
    var mySum = 0
    return helper(root, mySum, sum)
};

function helper(root, mySum, sum){
   if(root === null) return false
    
    mySum += root.val
    
   if(root.right === null && root.left === null) return mySum === sum
    
   return helper(root.left, mySum, sum) || helper(root.right, mySum, sum)
   
}