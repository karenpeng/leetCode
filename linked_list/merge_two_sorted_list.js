/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var dummy = new ListNode(null)
    var remember = dummy
    
    while(l1 !== null && l2 !== null){
        if(l1.val <= l2.val){
            dummy.next = l1
            l1 = l1.next
        }else{
            dummy.next = l2
            l2 = l2.next
        }
        dummy = dummy.next
    }
    
    while(l1!==null) {
        dummy.next = l1
        l1 = l1.next
        dummy = dummy.next
    }
    
    while(l2!==null) {
        dummy.next = l2
        l2 = l2.next
        dummy = dummy.next
    }
    
    dummy.next = null
    
    return remember.next
};