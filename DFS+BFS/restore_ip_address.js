/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    if(s.length < 4 || s.length > 12) return []
    var list = []
    var result = []
    helper(0, list, result, s)
    return result
};

function helper(begin, list, result, s){
    if(list.length === 4 && begin === s.length){
        result.push(makeIP(list))
        return
    }
    if(list.length >= 4 || begin >= s.length){
        return
    }
    for(var i = begin; i < s.length; i++){
        var prefix = s.substring(begin, i + 1)
        if(!isValid(prefix)) continue
        list.push(prefix)
        helper(i + 1, list, result, s)
        list.pop()
    }
}


function isValid(s){
    if(s.length < 1 || s.length > 3) return false
    if(parseInt(s) > 255) return false
    if(s[0] === '0' && s.length > 1) return false
    return true
}

function makeIP(arr){
    var s = ''
    arr.forEach(function(e){
        s += (e + '.')
    })
    return s.substring(0, s.length-1)
}