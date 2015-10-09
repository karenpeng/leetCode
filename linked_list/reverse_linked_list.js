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
var reverseList = function(head) {
    if(head === null || head.next === null) return head
    var pre = null
    var cur = head
    var temp = cur.next
    while(temp !== null){
        cur.next = pre
        pre = cur
        cur = temp
        temp = temp.next
    }
    cur.next = pre
    return cur
};