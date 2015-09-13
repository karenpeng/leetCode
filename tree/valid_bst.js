/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    if(root === null) return true
    return helper(root, -Infinity, Infinity)
};

function helper(root, min, max){
    if(root === null) return true
    if(root.val <= min || root.val >= max) return false
    return helper(root.left, min, root.val) && helper(root.right, root.val, max)
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    if(root === null) return true
    return helper(root) !== false
};

function helper(root){
   if(root === null)return{
       max: -Infinity,
       min: Infinity
   }
   
   var l = helper(root.left)
   var r = helper(root.right)
   
   if(l === false || r === false) return false
   if(root.val >= r.min || root.val <= l.max) return false
   
   return{
       max: r.max === -Infinity? root.val : r.max,
       min: l.min === Infinity? root.val : l.min
   }
}