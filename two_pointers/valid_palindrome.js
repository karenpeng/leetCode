/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(s.length === 0) return true
    var i = 0
    var j = s.length-1
    while(i < j){
        while( i < j && s[i].match(/[a-zA-Z0-9]/) === null ) i++
        while( i < j && s[j].match(/[a-zA-Z0-9]/) === null ) j--
        if(s[i].toLowerCase() !== s[j].toLowerCase()) return false
        i++
        j--
    }
    return true
};

console.log(isPalindrome(' '))