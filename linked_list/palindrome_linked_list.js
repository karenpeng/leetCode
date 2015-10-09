/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(head === null || head.next === null) return true
    var mid = findMid(head)
    var next = mid.next
    mid.next = null
    var last = reverse(next)
    while(last !== null){
        if(head.val !== last.val) return false
        head = head.next
        last = last.next
    }
    return true
};

function reverse(head){
    if(head === null || head.next === null) return head
    var pre = null
    var cur = head
    var tmp = cur.next
    while(tmp !== null){
        cur.next = pre
        pre = cur
        cur = tmp
        tmp = tmp.next
    }
    cur.next = pre
    return cur
}

function findMid(head){
    if(head === null || head.next === null) return head
    var fast = head.next
    var slow = head
    while(fast!==null&&fast.next!==null){
        fast = fast.next.next
        slow = slow.next
    }
    return slow
}