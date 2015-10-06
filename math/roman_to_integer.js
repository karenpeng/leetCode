/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    if(s.length === 0) return 0
    var dic = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000
    }
    var result = 0
    for(var i = 0; i < s.length ; i++){
        if(i < s.length - 1 && dic[s[i+1]] > dic[s[i]]){
            result += (dic[s[i+1]] - dic[s[i]]) 
            i++
        }else{
            result += dic[s[i]]
        }
    }
    return result
};