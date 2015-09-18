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
var detectCycle = function(head) {
    if(head === null) return head
    var fast = head
    var slow = head
    
    while(fast !== null && fast.next !== null){
        fast = fast.next.next
        slow = slow.next
        
        if(fast === slow) break
    }
    
    if(fast === null || fast.next === null) return null
    
    fast = head
    while(fast !== slow){
        fast = fast.next
        slow = slow.next
    }
    return slow
};