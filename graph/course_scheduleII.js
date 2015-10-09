/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    var depth = []
    var connection = []
    var queue = []
    var result = []
    for(var i = 0; i < numCourses; i++){
        depth[i] = 0
        connection[i] = []
    }
    prerequisites.forEach(function(arr){
        connection[arr[1]].push(arr[0])
        depth[arr[0]] ++
    })
   for(var i = 0; i < numCourses; i++){
        if(depth[i] === 0){
            queue.push(i)
            result.push(i)
        }
    }    
    if(queue.length === 0) return []
    
    while(queue.length > 0){
        var node = queue.shift()
        connection[node].forEach(function(n){
            depth[n] --
            if(depth[n] === 0){
                queue.push(n)
                result.push(n)
            }
        })
    }
    
    for(var i = 0; i < numCourses; i++){
        if(depth[i] !== 0) return []
    }
    return result
};