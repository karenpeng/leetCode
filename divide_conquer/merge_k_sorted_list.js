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

function helper(start, end, list){
    if(start === end) return list[start]
    if(start > end) return
    
    var mid = Math.floor((start + end)/2)
    var l = helper(start, mid, list)
    var r = helper(mid + 1, end, list)
    
    return merge(l, r)
}

function merge(l, r){
    var dummy = new ListNode(null)
    var remember = dummy
    while(l!==null && r!==null){
        if(l.val < r.val){
            dummy.next = l
            l = l.next
        }else{
            dummy.next = r
            r = r.next
        }
        dummy = dummy.next
    }
    if(l!==null){
         dummy.next = l
    }
    if(r!==null){
         dummy.next = r
    }
    return remember.next
}