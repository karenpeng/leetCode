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
    var list = []
    var result = []
    helper(root, list, result, sum)
    return result
};

function helper(root, list, result, sum){
    if(root === null) return
    
    list.push(root.val)
    
    if(root.left === null && root.right === null){
        if(sumup(list) === sum){
            result.push(deepCopy(list))
        }
    }
    
    if(root.left !== null){
        helper(root.left, list, result, sum)
        list.pop()
    }
    
    if(root.right !== null){
        helper(root.right, list, result, sum)
        list.pop()
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
    var _arr = []
    arr.forEach(function(e){
        _arr.push(e)
    })
    return _arr
}