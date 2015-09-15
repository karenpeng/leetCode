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
        queue.offer(node);
        map.put(node, new UndirectedGraphNode(node.label));
        
        while(!queue.isEmpty()){
            UndirectedGraphNode root = queue.poll();
            for(UndirectedGraphNode n : root.neighbors){
                if(!map.containsKey(n)){
                    queue.offer(n);
                    map.put(n, new UndirectedGraphNode(n.label));
                }
            }
        }
        
        for(UndirectedGraphNode n : map.keySet()){
           for(UndirectedGraphNode nn :  n.neighbors){
               map.get(n).neighbors.add(map.get(nn));
           }
        }
     
        return map.get(node);
    }
}