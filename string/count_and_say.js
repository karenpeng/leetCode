/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    var s = '1'
    while(--n){
        var i = 0
        var j = 1
        var c = ''
        while(i < s.length){
            while(i + j < s.length && s[i] === s[i+j]){
                j++
            }
            c += (j + s[i])
            i = i + j
            j = 1
        }
        s = c
    }
    return s
};