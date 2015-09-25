/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if(rowIndex === 0) return [1]
    var pre = []
    var cur = []
    pre[0] = 1
    for(var i = 1; i<= rowIndex; i++){
        for(var j = 0; j < i+1; j++){
            if(pre[j-1] === undefined) cur[j] = pre[j]
            else if(pre[j] === undefined) cur[j] = pre[j-1]
            else cur[j] = pre[j-1] + pre[j]
        }
        pre = cur
        cur = []
    }
    return pre
};