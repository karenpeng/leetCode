/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(matrix.length < 1 || matrix === null) return false
    
    var x = matrix.length - 1
    var y = 0
    while(x >= 0 && y < matrix[0].length){
        if(matrix[x][y] === target) return true
        else if(matrix[x][y] > target){
            x --
        }else{
            y++
        }
    }
    return false
};