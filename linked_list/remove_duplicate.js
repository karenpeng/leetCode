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
    if(head === null || head.next === null) return head
    var ahead = head.next
    var behind = head
    var remember = behind
    
    while(ahead !== null){
       if(ahead.val === behind.val){
            behind.next = ahead.next
        }else{
            behind = behind.next
        }
        ahead = ahead.next
    }
    return remember
};