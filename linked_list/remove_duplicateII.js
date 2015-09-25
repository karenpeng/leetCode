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
var deleteDuplicates = function(head) {
  if(head === null || head.next === null) return head
  var dummy = new ListNode(null)
  dummy.next = head
  var behind = dummy
  var ahead = dummy.next
  
  while(ahead !== null && ahead.next!==null){
      if(ahead.val === ahead.next.val){
         //跑到我跟我的后面不一样了
         while(ahead.next!== null && ahead.val === ahead.next.val){
             ahead = ahead.next
         }
         //然后就把我干掉了
         behind.next = ahead.next
      }else{
          behind = behind.next
      }
      ahead = ahead.next
  }
  return dummy.next
};

//我觉得这个我会永远记不住哎。。。 T_T