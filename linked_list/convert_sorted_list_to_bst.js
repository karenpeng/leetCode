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
    if(head === null) return head
    
    return helper(head)
};

function helper(head){
    if(head === null) return null

    //这一句防止40行 fast是null 然后42行就会出问题
    if(head.next === null) return new TreeNode(head.val)
    
    var slow = findMid(head)
    var root = new TreeNode(slow.next.val)
    root.right = sortedListToBST(slow.next.next)
    slow.next = null
    root.left = sortedListToBST(head)
    return root
}

function findMid(head){
    var fast = head.next
    var slow = head
    while(fast.next !== null && fast.next.next !== null){
        fast = fast.next.next
        slow = slow.next
    }
    return slow
}