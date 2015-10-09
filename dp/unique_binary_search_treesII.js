/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if(n < 0) return []
    return helper(1, n)
};

function helper(start, end, result){
    //it's when there's nothing
    //if start === end there's still one node
    if(start > end){
        return [null]
    }
    var result = []
    for(var i = start; i <= end; i++){
        var l = helper(start, i - 1)
        var r = helper(i + 1, end)
        for(var j = 0; j < l.length; j++){
            for(var k = 0; k < r.length; k++){
                var node = new TreeNode(i)
                node.left = l[j]
                node.right = r[k]
                result.push(node)
            }
        }
    }
    return result
}