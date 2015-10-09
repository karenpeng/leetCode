/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if(head === null) return head
    var dummy = new ListNode(null)
    dummy.next = head
    var ahead = head
    var behind = dummy
    while(ahead !== null){
        if(ahead.val === val){
            while(ahead !== null && ahead.val === val){
                ahead = ahead.next
            }
            behind.next = ahead
        }else{
            behind = behind.next
            ahead = ahead.next
        }
    }
    return dummy.next
};