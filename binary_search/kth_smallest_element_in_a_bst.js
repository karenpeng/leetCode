/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    //in order traversal??
    var result = []
    return helper(root, result, k)
};

function helper(root, result, k){
    if(root === null) return
    
    var l = helper(root.left, result, k)
    if(typeof l === 'number') return l
    result.push(root.val) 
    if(result.length === k){ 
        //it's done!
        //stop!!!
        return result[result.length-1]
    }
    var r = helper(root.right, result, k)
    if(typeof r === 'number') return r
}




