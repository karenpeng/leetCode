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
    var r = new ListNode(null)
    var lHead = l
    var rHead = r
    
    var p = head
    while(p !== null){
        if(p.val >= x){
            r.next = p
            r = r.next
        }else{
            l.next = p
            l = l.next
        }
        p = p.next
    }
    l.next = rHead.next
    //very important!!! otherwise it will circulate!!!
    r.next = null
    return lHead.next
};