/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    var graph = []
    var deepth = []
    
    for(var i = 0; i < numCourses; i++){
        deepth[i] = 0
        graph[i] = []
    }

    prerequisites.forEach(function(arr){
       graph[arr[1]].push(arr[0])
       deepth[arr[0]]++
    })
    
    var q = []
    for(var i = 0; i < numCourses; i++){
        if(deepth[i] === 0){
            q.push(i)
        }
    }
    
    while(q.length > 0){
        var t = q.shift()
        graph[t].forEach(function(node){
            deepth[node]--
            if(deepth[node] === 0){
                q.push(node)
            }
        })
    }
    
    for(var i = 0; i < numCourses; i++){
        if(deepth[i] !== 0) return false
    }
    return true
};