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
    var behind = head
    var ahead = head.next
    while(ahead !== null){
        if(behind.val === ahead.val){
            behind.next = ahead.next
        }else{
            behind = behind.next
        }
        ahead = ahead.next
    }
    return head
};