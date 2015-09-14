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
var sumNumbers = function(root) {
    if(root === null) return 0
    var s = ''
    var result = []
    helper(root, s, result)
    var sum = 0
    result.forEach(function(s){
        sum += parseInt(s)
    })
    return sum
};

function helper(root, s, result){
    if(root === null) return
    
    s += root.val
    
    if(root.left === null && root.right === null) result.push(s)
    
    helper(root.left, s, result) 
    
    helper(root.right, s, result)
}