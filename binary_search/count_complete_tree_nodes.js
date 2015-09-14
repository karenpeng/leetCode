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

//http://www.cnblogs.com/easonliu/p/4556487.html
//1. binary search O(NlogN)
var countNodes = function(root) {
    var depth = 0
    var node = root
    while(node !== null){
        depth ++
        node = node.left
    }
    if(depth === 0) return 0
    
    var left = 0
    var right = Math.pow(2, depth - 1) - 1
    var mid
    while(left <= right){
        mid = Math.floor((left + right) /2)
        if(isOK(root, depth, mid)) left = mid + 1
        else right = mid - 1
    }
    
    return Math.pow(2, depth - 1) + right
};


function isOK(root, depth, number){
   var p = root
   for(var i = depth -2 ; i >= 0; i--){
       //what is going on here???
       if(number & Math.pow(2, i)) p = p.right
       else p = p.left
   }
   return p !== null
}

//2.recursion
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
    if(l === r) return Math.pow(2, l) - 1
    else return countNodes(root.left) + countNodes(root.right) + 1
    
}

function getHeight(root, tag){
    var depth = 0
    while(root!== null){
        if(tag) root = root.left
        else root = root.right
        depth ++
    } 
    return depth
}




