/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    if(matrix.length === 0 || matrix[0].length === 0) return 0
    
    var f = []
    
    for(var i = 0; i < matrix.length; i++){
        f[i] = []
        f[i][0] = parseInt(matrix[i][0])
    }
    
    for(var i = 0; i < matrix[0].length; i++){
        f[0][i] = parseInt(matrix[0][i])
    }
    
    var max = f[0][0]
    
    for(var i = 1; i < matrix.length; i++){
        for(var j = 1; j < matrix[0].length; j++){
            if(matrix[i][j] === '1'){
                f[i][j] = Math.min(f[i-1][j], f[i][j-1], f[i-1][j-1]) + 1
            }else{
                f[i][j] = 0
            }
        }
    }
    
    f.forEach(function(_f){
        _f.forEach(function(__f){
            max = Math.max(max, __f)
        })
    })
    
    return Math.pow(max, 2)
};