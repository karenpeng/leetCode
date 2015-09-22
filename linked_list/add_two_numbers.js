/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var carry = 0
    var dummy = new ListNode(null)
    var remember = dummy
    while(l1 !== null && l2 !== null){
        var sum = (l1.val +l2.val + carry) % 10
        carry = Math.floor((l1.val + l2.val + carry) / 10)
        dummy.next = new ListNode(sum)
        l1 = l1.next
        l2 = l2.next
        dummy = dummy.next
    }
    while(l1 !== null){
        var sum = (l1.val + carry) % 10
        carry = Math.floor((l1.val + carry) / 10)
        dummy.next = new ListNode(sum)
        l1 = l1.next
        dummy = dummy.next
    }
    while(l2 !== null){
        var sum = (l2.val + carry) % 10
        carry = Math.floor((l2.val + carry) / 10)
        dummy.next = new ListNode(sum)
        l2 = l2.next
        dummy = dummy.next
    }
    if(carry !== 0){
        dummy.next = new ListNode(carry)
    }
    
    return remember.next
};