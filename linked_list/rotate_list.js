/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(head === null || head.next === null) return head
    var p = head
    var len = 1
    while(p.next !== null){
        p = p.next
        len ++
    }
    p.next = head
    for(var i = 0; i < len - k % len; i++){
        p = p.next
    }
    var remember = p.next
    p.next = null
    return remember
};