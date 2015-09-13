/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
//this is what i wrote, but it can't pass certain cases
//it will be time limit exceeded :(
var minWindow = function(s, t) {
    
    var start = 0
    var end = 0
    var len = Infinity
    
    while(end <= s.length){
        
        while(!containAll(s.substring(start, end), t) && end <= s.length){
            end++
            //console.log(start, end)
        }
        
        while(containAll(s.substring(start, end), t)){

            if(end - start < len){
                left = start
                right = end
                len = end - start
            }
            start ++

            //console.log(start, end)
        }
    }
    
    return s.substring(left, right)
    
};

function containAll(str1, str2){
    for(var i = 0; i < str2.length; i++){
        var s = str2[i]
        if(str1.indexOf(s) === -1) return false
    }
    return true
}

console.log(minWindow('a', 'a'))

//this is other's answer, i don't understand:
//http://www.cnblogs.com/TenosDoIt/p/3461301.html
