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
//non-recursion
var preorderTraversal = function(root) {
    if(root === null) return []
    var stack = []
    var result = []
    stack.push(root)
    while(stack.length > 0){
        var node = stack.pop()
        result.push(node.val)
        if(node.right !== null) stack.push(node.right)
        if(node.left !== null) stack.push(node.left)
    }
    return result
};

//traverse
var preorderTraversal = function(root) {
    if(root === null) return []
    var result = []
    helper(root, result)
    return result
};

function helper(root, result){
    if(root === null) return
    result.push(root.val)
    helper(root.left, result)
    helper(root.right, result)
}

//divide & conquer
var preorderTraversal = function(root) {
    if(root === null) return []
    return helper(root)
};

function helper(root){
    if(root === null) return[]
    
    var l = helper(root.left)
    var r = helper(root.right)
    
    return [root.val].concat(l).concat(r)
}