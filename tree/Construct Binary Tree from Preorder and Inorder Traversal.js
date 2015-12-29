/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(preorder.length === 0){
        return null
    }
    return helper(preorder, inorder, 0, preorder.length-1, 0, inorder.length-1)
};

function helper(preorder, inorder, prestart, preend, instart, inend){
    if(preend < prestart || inend < instart) return null
    if(preend === prestart && inend === instart) return new TreeNode(preorder[prestart])
    var root = new TreeNode(preorder[prestart])
    var mid = -1
    
    for(var i = instart; i <= inend; i++){
        if(inorder[i] === root.val) {
            mid = i
            break
        }
    }
    if(mid === -1) return null
    //slice is like this: [begin, end)
    var lLen = mid - instart
    var rLen = inend - mid
    root.left = helper(preorder, inorder, prestart + 1, prestart + lLen, instart, mid - 1 )
    root.right = helper(preorder, inorder, prestart + 1 + lLen, preend, mid + 1, inend)
    return root
}
