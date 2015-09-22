/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(lists.length === 0) return null
    return helper(0, lists.length-1, lists)
};

function helper(start, end, lists){
    if(start === end) return lists[start]
    if(start > end) return
    
    var mid = Math.floor((start + end)/2)
    var l = helper(start, mid, lists)
    var r = helper(mid + 1, end, lists)
    
    return merge(l, r)
}

function merge(l1, l2){
    if(l1 === null) return l2
    if(l2 === null) return l1
    var begin = new ListNode(null)
    var remember = begin
    while(l1 !== null && l2 !== null){
        if(l1.val < l2.val){
            begin.next = l1
            l1 = l1.next
        }else{
            begin.next = l2
            l2 = l2.next
        }
        begin = begin.next
    }
    if(l1 !== null) begin.next = l1
    if(l2 !== null) begin.next = l2
    
    return remember.next
}