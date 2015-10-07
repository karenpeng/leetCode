/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(head === null || head.next === null) return head
    var dummy = new ListNode(null)
    dummy.next = head
    var pre = dummy
    var cur = pre.next
    while(cur !== null && cur.next !== null){
        pre.next = cur.next
        cur.next = cur.next.next
        pre.next.next = cur
        pre = cur
        cur = cur.next
    }
    return dummy.next
};