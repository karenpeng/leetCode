/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    var m = matrix.length
    if(m === 0) return []
    var n = matrix[0].length
    if(n === 0)return[]
    
    var l = 0
    var r = n - 1
    var u = 0
    var d = m - 1
    var direction = 0
    var output = []
    
    //don't forget the equal sign!
    while(l <= r && u <= d){
        switch(direction){
            case 0:
                for(var i = l; i <= r; i++){
                    output.push(matrix[u][i])
                }
                direction = 1
                u++
                break
            case 1:
                for(var i = u; i <= d; i++){
                    output.push(matrix[i][r])
                }
                direction = 2
                r--
                break
            case 2:
                for(var i = r; i >= l; i--){
                    output.push(matrix[d][i])
                }
                direction = 3
                d--
                break
            case 3:
                for(var i = d; i >= u; i--){
                    output.push(matrix[i][l])
                }
                direction = 0
                l++
                break
        }
    }
    
    return output
};

console.log(spiralOrder([
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]))