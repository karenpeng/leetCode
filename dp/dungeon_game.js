/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
    var m = dungeon.length
    var n = dungeon[0].length
    
    var f = []
    f[m-1] = []
    f[m-1][n-1] = Math.max(1, 1-dungeon[m-1][n-1])
    for(var i = m - 2; i >= 0; i--){
        f[i] = []
        f[i][n-1] = Math.max(1, f[i+1][n-1] - dungeon[i][n-1])
    }
    
    for(var j = n - 2; j >= 0; j--){
        f[m-1][j] = Math.max(1, f[m-1][j+1] - dungeon[m-1][j])
    }
    
    for(var i = m-2; i >= 0; i--){
        for(var j = n-2; j >= 0; j--){
            var down = Math.max(f[i+1][j] - dungeon[i][j], 1)
            var right = Math.max(f[i][j+1] - dungeon[i][j], 1)
            f[i][j] = Math.min(down, right)
        }
    }
    return f[0][0]
}