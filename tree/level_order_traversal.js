/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(root === null) return[]
    var queue = []
    queue.push(root)
    var result = []
    while(queue.length > 0){
        var size = queue.length
        var level = []
        for(var i = 0; i < size; i++){
            var node = queue.shift()
            if(node.left !== null) queue.push(node.left)
            if(node.right !== null) queue.push(node.right)
            level.push(node.val)
        }
        result.push(level)
    }
    return result
};