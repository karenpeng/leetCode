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
        
        RandomListNode node = head;
        while(node.next != null){
            RandomListNode node1 = new RandomListNode(node.next.label);
            map.get(node).next = node1;
            map.put(node.next, node1);
            node = node.next;
        }
        
        for(RandomListNode n : map.keySet()){
            if(n.random != null){
                map.get(n).random = map.get(n.random);
            }
        }
        
        return map.get(head);
    }
}