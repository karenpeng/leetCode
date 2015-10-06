/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    var m = grid.length
    var n = grid[0].length
    var f = []
    f[0] = []
    f[0][0] = grid[0][0]
    for(var i = 1; i < m; i++){
        f[i] = []
        f[i][0] = f[i-1][0] + grid[i][0]
    }
    for(var j = 1; j < n; j++){
        f[0][j] = f[0][j-1] + grid[0][j]
    }
    for(var i = 1; i < m; i++){
        for(var j = 1; j < n; j++){
            f[i][j] = Math.min(f[i-1][j], f[i][j-1]) + grid[i][j]
        }
    }
    return f[m-1][n-1]
};