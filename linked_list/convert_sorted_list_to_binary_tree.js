/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    if(head === null) return null
    return helper(head)
};

function helper(head){
    if(head === null) return null
    if(head.next === null) return new TreeNode(head.val)
    
    var mid = getMid(head) 
    if(mid.next === null) return new TreeNode(mid.val)
    
    var node = new TreeNode(mid.next.val)
    node.right = helper(mid.next.next)
    mid.next = null
    node.left = helper(head)
    return node
}

function getMid(head){
    var fast = head.next
    var slow = head
    //next next 因为你是想找mid的前一个
    while(fast.next !== null && fast.next.next !== null){
        fast = fast.next.next
        slow = slow.next
    }
    return slow
}