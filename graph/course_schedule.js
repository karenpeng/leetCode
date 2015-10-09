/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    var depth = []
    var connection = []
    var queue = []
    
    for(var i = 0; i < numCourses; i++){
        depth[i] = 0
        connection[i] = []
    }
    prerequisites.forEach(function(arr){
        connection[arr[1]].push(arr[0])
        depth[arr[0]] ++
    })
    
    for(var i = 0; i < numCourses; i++){
        if(depth[i] === 0) {
            queue.push(i)
        }
    }
    
    if(queue.length === 0) return false
    
    //graph likes queue
    while(queue.length > 0){
        var begin = queue.shift()
        connection[begin].forEach(function(e){
            depth[e] --
            if(depth[e] === 0){
                queue.push(e)
            }
        })
    }
    
    
    for(var i = 0; i < numCourses; i++){
        if(depth[i] !== 0) return false
    }
    return true
    
};