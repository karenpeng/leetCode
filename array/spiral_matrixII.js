/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    if(n === 0) return []
    
    var value = 0
    var output = []
    
    var l = 0
    var r = n - 1
    var u = 0
    var d = n - 1
    var direction = 0
    
    while(l <= r && u <= d){
        switch(direction){
            case 0 :
                if(output[u]===undefined) output[u] = []
                for(var i = l; i <= r; i++){
                    output[u][i] = ++value
                }
                direction = 1
                u++
                break
            case 1:
                for(var i = u; i <= d; i++){
                    if(output[i] === undefined)output[i] = []
                    output[i][r] = ++value
                }
                direction = 2
                r--
                break
            case 2:
                if(output[d] === undefined) output[d] = []
                for(var i = r; i >= l; i--){
                    output[d][i] = ++value
                }
                direction = 3
                d--
                break
            case 3:
                for(var i = d; i >= u; i--){
                    if(output[i] === undefined)output[i] = []
                    output[i][l] = ++value
                }
                direction = 0
                l++
                break
        }
    }
    
    return output
};