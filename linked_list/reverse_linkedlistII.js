/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    var dummy = new ListNode(null)
    dummy.next = head
    
    var p = dummy
    for(var i = 0; i< m - 1; i++){
        p = p.next
    }
    var end = p
    
    p = dummy
    for(var i = 0; i < n; i++){
        p = p.next
    }
    
    var pre = p.next
    var begin = pre
    
    var cur = end.next
    var temp = cur.next
    while(temp !== null && temp !== begin){
        cur.next = pre
        pre = cur
        cur = temp
        temp = temp.next
    }
    cur.next = pre
    end.next = cur
    
    return dummy.next
};