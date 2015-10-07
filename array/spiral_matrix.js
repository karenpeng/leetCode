/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    var l = 0
    var r = n-1
    var f = 0
    var b = n-1
    var direction = 0
    var result = []
    var value = 0
    while(l <= r && f <= b){
        switch(direction){
            case 0:
                if(result[f] === undefined) result[f] = []
                for(var i = l; i <= r; i++){
                    result[f][i] = ++value
                }
                direction = 1
                f++
                break
            case 1:
                for(i = f; i <= b; i++){
                    if(result[i] === undefined) result[i] = []
                    result[i][r] = ++value
                }
                direction = 2
                r--
                break
            case 2:
                if(result[b] === undefined) result[b] = []
                for(i = r; i >= l; i--){
                    result[b][i] = ++value
                }
                direction = 3
                b--
                break
            case 3:
                for(i = b; i >= f; i--){
                    if(result[i] === undefined) result[i] = []
                    result[i][l] = ++value
                }
                direction = 0
                l++
                break
        }
    }
    return result
};