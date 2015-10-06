/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    var f = []
    f[triangle.length-1] = []
    for(var i = 0; i < triangle[triangle.length-1].length; i++){
        f[triangle.length-1][i] = triangle[triangle.length-1][i]
    }
    for(var i = triangle.length-2; i >= 0; i--){
        f[i] = []
        for(var j = 0; j < triangle[i].length; j++)
        f[i][j] = Math.min(f[i+1][j], f[i+1][j+1]) + triangle[i][j]
    }
    return f[0][0]
};