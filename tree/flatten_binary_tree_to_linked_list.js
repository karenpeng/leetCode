/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if(root === null) return
    helper(root)
};

function helper(root){
    if(root === null) {
        return null
    }
    
    var l = helper(root.left)
    var r = helper(root.right)
    
    if(l === null && r === null){
        return{
            head: root,
            tail: root
        }
    }
    
    if(l === null){
        root.right = r.head
        return{
            head: root,
            tail: r.tail
        }
    }
    
    if(r === null){
        root.left = null
        root.right = l.head
        return{
            head: root,
            tail: l.tail
        }
    }
    
    root.left = null
    root.right = l.head
    l.tail.right = r.head
    
    return{
        head: root,
        tail: r.tail
    }
}