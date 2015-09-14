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
var rightSideView = function(root) {
    if(root === null) return []
    var queue = []
    var result = []
    queue.push(root)
    while(queue.length > 0){
        var size = queue.length
        for(var i = 0; i < size; i++){
            var node = queue.shift()
            if(i === size -1) result.push(node.val)
            if(node.left !== null) queue.push(node.left)
            if(node.right !== null) queue.push(node.right)
        }
    }
    return result
};