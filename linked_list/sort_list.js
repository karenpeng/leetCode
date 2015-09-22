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
var sortList = function(head) {
    if(head === null || head.next === null) return head
    return helper(head)
};

function helper(head){
    if(head === null || head.next === null) return head
    var mid = findMid(head)
    var r = helper(mid.next)
    mid.next = null
    var l = helper(head)
    return merge(l, r)
}

function findMid(head){
    if(head === null || head.next === null) return head
    var fast = head.next
    var slow = head
    while(fast !== null && fast.next !== null){
        fast = fast.next.next
        slow = slow.next
    }
    return slow
}

function merge(l, r){
    var dummy = new ListNode(null)
    var remember = dummy
    while(l !== null && r !== null){
        if(l.val < r.val){
            dummy.next = l
            l = l.next
        }else{
            dummy.next = r
            r = r.next
        }
        dummy = dummy.next
    }
    if(l!==null) dummy.next = l
    if(r!==null) dummy.next = r
    return remember.next
}