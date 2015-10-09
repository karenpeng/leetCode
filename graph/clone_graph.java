/**
 * Definition for undirected graph.
 * class UndirectedGraphNode {
 *     int label;
 *     List<UndirectedGraphNode> neighbors;
 *     UndirectedGraphNode(int x) { label = x; neighbors = new ArrayList<UndirectedGraphNode>(); }
 * };
 */
public class Solution {
    public UndirectedGraphNode cloneGraph(UndirectedGraphNode node) {
        if(node == null) return null;
    
        Map<UndirectedGraphNode, UndirectedGraphNode> map = new HashMap<>();
        Queue<UndirectedGraphNode> queue = new LinkedList<>();
        map.put(node, new UndirectedGraphNode(node.label));
        queue.offer(node);
        while(!queue.isEmpty()){
            UndirectedGraphNode node1 = queue.poll();
            for(UndirectedGraphNode n: node1.neighbors){
                if(!map.containsKey(n)){
                    UndirectedGraphNode newNode = new UndirectedGraphNode(n.label);
                    map.put(n, newNode);
                    //don't forget to put it into the queue
                    queue.offer(n);
                }
            }
        }
        
        for(UndirectedGraphNode n: map.keySet()){
            for(UndirectedGraphNode nn : n.neighbors){
                map.get(n).neighbors.add(map.get(nn));
            }
        } 
        
        return map.get(node);
    }
}