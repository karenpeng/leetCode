//http://bangbingsyb.blogspot.com/2014/11/leetcode-unique-binary-search-trees-i-ii.html

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
    return helper( 1, n )
}

function helper(min, max){
    var output = []
    if(min > max) {
        output.push(null)
        return output
    }
    
    for(var i = min; i <= max; i++){
        var leftSubTrees = helper(min, i - 1)
        var rightSubTrees = helper(i + 1, max)
        
        for(var j = 0; j < leftSubTrees.length; j++){
            for(var k = 0; k < rightSubTrees.length; k++){
                
                var root = new TreeNode(i)
                root.left = leftSubTrees[j]
                root.right = rightSubTrees[k]
                output.push(root)
            }
        }
    }
    return output
}