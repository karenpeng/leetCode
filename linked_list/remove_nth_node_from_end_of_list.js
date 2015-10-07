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
    var dummy = new ListNode(null)
    dummy.next = head
    var ahead = dummy
    var behind = dummy
    while(--n>=0){
        ahead = ahead.next
    }
    while(ahead.next !== null){
        ahead = ahead.next
        behind = behind.next
    }
    if(behind.next === null){
        return null
    } 
    behind.next = behind.next.next
    return dummy.next
};