/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if(head === null || head.next === null) return
    var mid = findMid(head)
    var r = mid.next
    mid.next = null
    r = reverse(r)
    merge(head, r)
};

function findMid(head){
    var fast = head.next
    var slow = head
    while(fast!== null && fast.next !== null){
        fast = fast.next.next
        slow = slow.next
    }
    return slow
}

function reverse(head){
    if(head === null || head.next === null) return head
    var pre = null
    var cur = head
    var temp = cur.next
    while(temp !== null){
        cur.next = pre
        pre = cur
        cur = temp
        temp = temp.next
    }
    cur.next = pre
    return cur
}

function merge(l1, l2){
    var dummy = new ListNode(null)
    var remember = dummy
    var i = 0
    while(l1 !== null && l2 !== null){
        if(i % 2 === 0){
            dummy.next = l1
            l1 = l1.next
        }else{
            dummy.next = l2
            l2 = l2.next 
        }
        dummy = dummy.next
        i++
    }
    if(l1 !== null) dummy.next = l1
    if(l2 !== null) dummy.next = l2
    return remember.next
}