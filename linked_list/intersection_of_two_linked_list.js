/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if(headA === null || headB === null) return null
    var m = getLen(headA)
    var n = getLen(headB)
    if(m > n){
        for(var i = 0; i < m-n; i++){
            headA = headA.next
        }
    }else if(n > m){
        for(var i = 0; i < n-m; i++){
            headB = headB.next
        }
    }
    while(headA !== null && headB !== null){
        if(headA === headB) return headA
        else{
            headA = headA.next
            headB = headB.next
        }
    }
    return null
    
};

function getLen(head){
    var count = 0
    while(head!==null){
        head = head.next
        count++
    }
    return count
}