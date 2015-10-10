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
var deleteDuplicates = function(head) {
    if(head === null) return head
    var dummy = new ListNode(null)
    var remember = dummy
    dummy.next = head
    var ahead = dummy.next
    var behind = dummy
    while(ahead!==null && ahead.next !== null){
        if(ahead.val === ahead.next.val){
            while(ahead.next !== null && ahead.val === ahead.next.val){
                ahead = ahead.next
            }
            behind.next = ahead.next
            ahead = behind.next
        }else{
            ahead = ahead.next
            behind = behind.next
        }
    }
    return remember.next
};



