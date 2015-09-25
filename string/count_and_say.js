/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    var i = 0
    var j = 1   
    var output = '1'
    while(--n){
        
        var temp = ''
        while(i < output.length){
            
            while(i+j < output.length && output[i]===output[i+j])j++
            temp += j + output[i]
            i += j
            j = 1
        }
        
        output = temp
        i = 0
        j = 1
    }
    return output
};