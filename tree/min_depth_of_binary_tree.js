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
var minDepth = function(root) {
    if(root === null) return 0
    var queue = []
    queue.push(root)
    var count = 0
    while(queue.length > 0){
        var size = queue.length
        count ++
        for(var i = 0; i < size; i++){
            var node = queue.shift()
            if(node.left === null && node.right === null) return count
            if(node.left !== null) queue.push(node.left)
            if(node.right !== null) queue.push(node.right)
        }
    }
};