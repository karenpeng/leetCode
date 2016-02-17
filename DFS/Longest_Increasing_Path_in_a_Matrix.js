/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    var max = 0
    var cache = []
    for(var i = 0; i < matrix.length; i++){
      cache[i] = []
        for(var j = 0; j < matrix[0].length; j++){
          cache[i][j] = 0
        }
    }
  
    for(var i = 0; i < matrix.length; i++){
      for(var j = 0; j < matrix[0].length; j++){
        max = Math.max(max, helper(matrix, i, j, -Infinity, cache))
      }
    }
    return max
};

function helper(matrix, x, y, pre, cache){

    if(matrix[x] === undefined || matrix[x][y] === undefined) return 0
    if(matrix[x][y] <= pre) return 0
    if(cache[x][y] !== 0) return cache[x][y]
    
    var _pre = matrix[x][y]
    
    var max = Math.max(
      helper(matrix, x-1, y, _pre, cache),
      helper(matrix, x+1, y, _pre, cache),
      helper(matrix, x, y-1, _pre, cache),
      helper(matrix, x, y+1, _pre, cache) 
    ) + 1
    
   cache[x][y] = max
   
   return max
}
