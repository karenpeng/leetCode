/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var dic = [
        ['I', 'V'],
        ['X', 'L'],
        ['C', 'D'],
        ['M']
        ]
    var s = ''
    var level = 0
    while(num > 0){
        var c = num % 10
        s = makeRoman(c, level, dic) + s
        num = Math.floor(num/10)
        level++
    }
    return s
};

function makeRoman(num, level, dic){
    if(num === 5){
        return dic[level][1]
    }
    if(num === 9){
        return dic[level][0]+dic[level+1][0]
    }
    if(num === 4){
        return dic[level][0]+dic[level][1]
    }
    if(num < 5){
        var s = ''
        for(var i = 0; i< num; i++){
          s += dic[level][0]   
        }
        return s
    }
    if(num > 5){
        var s = dic[level][1]
        for(var i = 0; i< num - 5; i++){
          s += dic[level][0]   
        }
        return s
    }
}