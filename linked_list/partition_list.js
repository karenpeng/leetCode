/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
   var l = new ListNode(null)
   var rememberl = l
   var r = new ListNode(null)
   var rememberr = r
   while(head !== null){
       if(head.val < x){
           l.next = head
           l = l.next
       }else{
           r.next = head
           r = r.next
       }
       head = head.next
   }
   l.next = rememberr.next
   r.next = null
   return rememberl.next
};