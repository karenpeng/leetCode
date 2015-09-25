/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var l = num.length
    var dic = [
            ['I', 'V'],
            ['X', 'L'],
            ['C', 'D'],
            ['M']
        ]
    var output = ''
    var l = 0
    while(num > 0){
        var c = num % 10
        num = Math.floor(num / 10)
        output = makeStr(l, c, dic) + output
        l++
    }
    return output
};

function makeStr(level, number, dic){
    if (number === 5) return dic[level][1]
    if (number === 4) return dic[level][0] + dic[level][1]
    if (number === 9) return dic[level][0] + dic[level+1][0]
    
    if(number > 5) {
        var output = dic[level][1]
        for(var i = 0; i < number - 5; i++){
            output += dic[level][0]
        }
        return output 
    }
    if(number < 5) {
        var output = ''
        for(var i = 0; i < number; i++){
            output += dic[level][0]
        }
        return output 
    }
}