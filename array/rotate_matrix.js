/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    var n = matrix.length
    if(n === 0) return
    
    for(var i = 0; i < (n / 2); i++){
        //直接用该行的下标
        for(var j = i; j < n - 1 - i; j++){
            var tem = matrix[i][j]
            matrix[i][j] = matrix[n - 1 - j][i]
            matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j]
            matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i]
            matrix[j][n - 1 - i] = tem
        }
    }

    console.log(matrix)
};

rotate([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]])

