/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows === 0) return[]
    var output = []
    
    output[0] = [1]
    for(var i = 1; i < numRows; i++){
        for(var j = 0; j < i+1; j++){
            if(output[i] === undefined) output[i] = []
            if(output[i-1][j-1] === undefined) output[i][j] = output[i-1][j]
            else if(output[i-1][j] === undefined) output[i][j] = output[i-1][j-1]
            else output[i][j] = output[i-1][j-1] + output[i-1][j]
        }
    }
    return output
};