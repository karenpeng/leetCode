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
    if(head == null) return head
    var dummy = new ListNode(null)
    dummy.next = head
    var p = dummy
    while(p.next !== null){
        if(p.next.val === val){
            p.next = p.next.next
        }else{
            p = p.next
        }
    }
    return dummy.next
}
