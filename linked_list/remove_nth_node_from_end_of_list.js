/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var dummy = new TreeNode(null)
    dummy.next = head
    
    var ahead = dummy
    var behind = dummy
    for(var i = 0; i < n; i++){
        ahead = ahead.next
    }
    while(ahead.next !== null){
        ahead = ahead.next
        behind = behind.next
    }
    
    behind.next = behind.next.next
    
    return dummy.next
};