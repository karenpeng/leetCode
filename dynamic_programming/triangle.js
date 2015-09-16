/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    
    var n = triangle.length
    if(n === 0) return 0
    var f = []
    f[n-1] = []
    for(var i = 0; i < triangle[n-1].length; i++){
        f[n-1][i] = triangle[n-1][i]
    }
    
    for(var i = triangle.length -2; i >= 0; i--){
        for(var j = 0; j < triangle[i].length; j++){
            if(f[i] === undefined) f[i] = []
            f[i][j] = Math.min(f[i+1][j], f[i+1][j+1]) + triangle[i][j]
        }
    }
    
    return f[0][0]
    
};