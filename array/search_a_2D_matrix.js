/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var m = matrix.length
    var n = matrix[0].length
    if(m === 0 || n === 0) return false
    var start = 0
    var end = m*n-1
    
    while(start + 1 < end){
        var mid = Math.floor((start+end)/2)
        var r = Math.floor(mid /n)
        var c = mid % n
        if(matrix[r][c] === target) return true
        else if(matrix[r][c] > target) end = mid
        else start = mid + 1
    }
    return matrix[Math.floor(start / n)][start % n] === target || matrix[Math.floor(end /n)][end%n] === target
    return false
};