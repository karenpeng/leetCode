/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    var m = matrix.length
    if(m === 0) return 0
    var n = matrix[0].length
    var f = []
    //please remember max!!!
    var max = 0
    
    for(var i = 0; i < m; i++){
        f[i] = []
        f[i][0] = parseInt(matrix[i][0])
        max = Math.max(max, f[i][0])
    }
    for(var j = 1; j < n; j++){
        f[0][j] = parseInt(matrix[0][j])
        max = Math.max(max, f[0][j])
    }
    
    for(i = 1; i < m; i++){
        for(j = 1; j < n; j++){
            if(matrix[i][j] === '1'){
              f[i][j] = Math.min(f[i-1][j-1], f[i-1][j], f[i][j-1]) + 1
              max = Math.max(max, f[i][j])
            }else{
              f[i][j] = 0
            }
        }
    }
    
    return Math.pow(max, 2)
};