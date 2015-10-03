/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    if(prerequisites === []) return
    
    var graph = []
    var deepth = []
    var queue = []
    var result = []
    
    for(var i = 0; i < numCourses; i++){
        graph[i] = []
        deepth[i] = 0
    }
    
    prerequisites.forEach(function(arr){
        graph[arr[1]].push(arr[0])
        deepth[arr[0]] ++
    })
    
    for(var i = 0; i < numCourses; i++){
        if(deepth[i] === 0) queue.push(i)
    }
    
    while(queue.length > 0){
        var c = queue.shift()
        result.push(c)
        graph[c].forEach(function(cc){
            deepth[cc]--
            if(deepth[cc] === 0){
                queue.push(cc)
            }
        })
    }
    
    if(result.length !== numCourses) result = []
    
    return result
};