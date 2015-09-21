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
    if(head === null) return true
    var mid = findMid(head)
    var next = mid.next
    mid.next = null
    var newHead = reverse(next)
    
    while(newHead !== null){
        if(head.val !== newHead.val) return false
        head = head.next
        newHead = newHead.next
    }
    return true
};

function findMid(head){
    if(head.next === null) return head
    var fast = head.next
    var slow = head
    while(fast !== null && fast.next !== null){
        fast = fast.next.next
        slow = slow.next
    }
    return slow
}

function reverse(head){
    if(head === null || head.next === null) return head
    var pre = null
    var cur = head
    var temp = head.next
    
    while(temp !== null){
        cur.next = pre
        pre = cur
        cur = temp
        temp = temp.next
    }
    cur.next = pre
    return cur
}