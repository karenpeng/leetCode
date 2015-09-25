/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    if(s.length === 0) return 0
    
    var dic = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    if(s.length === 1) return dic[s[0]]
    
    var output = 0
    for(var i = 0; i < s.length; i++){
        if( i < s.length-1 && dic[s[i]] < dic[s[i+1]]) {
            output += (dic[s[i+1]] - dic[s[i]])
            i++
        }else{
            output += dic[s[i]]
        }
    }
    return output
};