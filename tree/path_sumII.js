/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    if(root === null) return []
    var mySum = []
    var result = []
    helper(root, mySum, sum, result)
    return result
};

function helper(root, mySum, sum, result){
    if(root === null) return
    
    mySum.push(root.val)
    
    if(root.left === null && root.right === null){
        if(sumup(mySum) === sum){
            result.push(deepCopy(mySum))
        }
    }
    
    if(root.left !== null){
        helper(root.left, mySum, sum, result)
        mySum.pop()
    }
    
    if(root.right !== null){
        helper(root.right, mySum, sum, result)
        mySum.pop()
    }
}


function sumup(arr){
    var sum = 0
    arr.forEach(function(e){
        sum += e
    })
    return sum
}

function deepCopy(arr){
    var output = []
    arr.forEach(function(e){
        output.push(e)
    })
    return output
}