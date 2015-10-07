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
    var result = []
    helper(root, 0, result)
    var sum = 0
    result.forEach(function(s){
        sum += s
    })
    return sum
};

function helper(root, sum, result){
    if(root === null) return
    sum *= 10
    sum += root.val
    if(root.left === null && root.right === null) {
        result.push(sum)
    }
    helper(root.left, sum, result)
    helper(root.right, sum, result)
    
}