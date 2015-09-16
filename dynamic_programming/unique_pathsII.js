/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    var m = obstacleGrid.length
    var n = obstacleGrid[0].length
    if(m === 0 || n === 0) return 0
    if(obstacleGrid[0][0] === 1) return 0
    
    var f = []
    f[0]= []
    f[0][0] = 1
    for(var i = 1; i < m; i++){
        f[i] = []
        if(f[i-1][0] === 0 || obstacleGrid[i][0] === 1) f[i][0] = 0
        else f[i][0] = 1
    }
    
    for(var i = 1; i < n; i++){
        if(f[0][i-1] === 0 || obstacleGrid[0][i] === 1) f[0][i] = 0
        else f[0][i] = 1
    }
    
    for(var i = 1; i < m; i++){
        for(var j = 1; j < n; j++){
            if(f[i] === undefined) f[i] = []
            if(obstacleGrid[i][j] === 1) f[i][j] = 0
            else f[i][j] = f[i-1][j] + f[i][j-1]
        }
    }
    
    return f[m-1][n-1]
};