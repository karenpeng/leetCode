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
var countNodes = function(root) {
    if(root === null) return 0
    var l = getHeight(root, true)
    var r = getHeight(root, false)
    if(l === r){
        return Math.pow(2, l) - 1
    }
    else return countNodes(root.left) + countNodes(root.right) + 1
}

function getHeight(root, tag){
    var count = 0
    while(root !== null){
        if(tag) root = root.left
        else root = root.right
        count ++
    }
    return count
}