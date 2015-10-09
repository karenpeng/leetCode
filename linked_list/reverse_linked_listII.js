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
    if(head === null || head.next === null) return head
    var dummy = new ListNode(null)
    dummy.next = head
    var p = dummy
    for(var i = 0; i < m-1; i++){
        p = p.next
    }
    var endOfBegin = p

    p = dummy
    for(var i = 0; i < n; i++){
        p = p.next
    }
    var startOfEnd = p.next
    
    var pre = startOfEnd
    var cur = endOfBegin.next
    var temp = cur.next
    
    while(temp !== startOfEnd){
        
        cur.next = pre
        pre = cur
        cur = temp
        temp = temp.next
    }
    cur.next = pre
    endOfBegin.next = cur
    return dummy.next
};