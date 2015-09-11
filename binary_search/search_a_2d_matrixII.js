/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var x = matrix.length-1
    var y = 0
    while(x >= 0 && y < matrix[0].length){
        if(target === matrix[x][y]) return true
        else if(target > matrix[x][y]){
            y ++
        }else{
            x --
        }
    }
    return false
};