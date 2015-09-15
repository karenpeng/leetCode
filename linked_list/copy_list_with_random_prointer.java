/**
 * Definition for singly-linked list with a random pointer.
 * class RandomListNode {
 *     int label;
 *     RandomListNode next, random;
 *     RandomListNode(int x) { this.label = x; }
 * };
 */
public class Solution {
    public RandomListNode copyRandomList(RandomListNode head) {
        if(head == null) return null;
        Map<RandomListNode, RandomListNode> map = new HashMap<>();
        map.put(head, new RandomListNode(head.label));
        
        RandomListNode p = head;
        while(p.next != null){
            if(!map.containsKey(p.next) ){
                RandomListNode node = new RandomListNode(p.next.label);
                map.put(p.next, node);
                map.get(p).next = node;
                p = p.next;
            }
        }
        
        for(RandomListNode n : map.keySet()){
            if(n.random != null){
                map.get(n).random = map.get(n.random);
            }
        }
        
        return map.get(head);
    }
}