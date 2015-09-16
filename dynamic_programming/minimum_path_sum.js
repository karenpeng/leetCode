/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    var m = grid.length
    var n = grid[0].length
    
    if( m === 0 || n === 0 ) return 0
    var f = []
    f[0] = []
    f[0][0] = grid[0][0]
    
    for(var i = 1; i < m; i++){
        f[i]=[]
        f[i][0] = grid[i][0] + f[i-1][0]
    }
    
    for(var i = 1; i < n; i++){
        f[0][i] = grid[0][i] + f[0][i-1]
    }
    
    for(var i = 1; i < m; i++){
        for(var j = 1; j < n; j++){
            f[i][j] = Math.min(f[i-1][j], f[i][j-1]) + grid[i][j]
        }
    }
    
    return f[m-1][n-1]
};