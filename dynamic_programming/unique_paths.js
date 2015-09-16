/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    var f = []
    f[0] = []
    for(var i = 0; i < n; i++){
        f[0][i] = 1
    }
    for(var i = 1; i < m; i++){
        f[i] = []
        f[i][0] = 1
    }
    for(var j = 1; j < m; j++){
        for(var k = 1; k < n; k++){
            if(f[j] === undefined) f[j] = []
            f[j][k] = f[j-1][k] + f[j][k-1]
        }
    }
    return f[m-1][n-1]
};