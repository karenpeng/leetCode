/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */

//this won't work when there are nodes with same label
var cloneGraph = function(graph) {
    if(graph === null) return null
    var map = []
    var queue = []
    queue.push(graph)
    while(queue.length > 0){
        var node = queue.shift()
        node.neighbors.forEach(function(n){
            if(n.label !== node.label){

            if(map[n.label] === undefined){
                map[n.label] = n
                queue.push(n)
            }
        })
    }
    
    map.forEach(function(n){
        n.neighbors.forEach(function(nn){
            map[n.label].neighbors.push(map[nn.label])
        })
    })
    
    return map[graph.label]
}

cloneGraph(new UndirectedGraphNode(-1))

//http://www.cnblogs.com/Liok3187/p/4516929.html
//this will work
/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraph = function(graph) {
    if(graph === null) return null
    var queue = []
    var map = []
    map[graph.label] = new UndirectedGraphNode(graph.label)
    queue.push(graph)
    while(queue.length > 0){
        var node = queue.shift()
        var newNode = map[node.label]
        node.neighbors.forEach(function(n){
            if(n.label !== node.label){
                if(!map[n.label]){
                    newNeighbor = new UndirectedGraphNode(n.label)
                    map[n.label] = newNeighbor
                    queue.push(n)
                }else{
                    newNeighbor = map[n.label]
                }
                newNode.neighbors.push(newNeighbor)
            }else{
                //这句挺关键的
                //如果值一样 那就把那个值的node放进自己的邻居那里
               newNode.neighbors.push(map[node.label]) 
            }
        })
    }
    

    return map[graph.label]
 }