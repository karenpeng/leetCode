function containAll(s, t){
    var hash = {}
    for(var i = 0; i < t.length; i++){
        var index = s.indexOf(t[i])
        if( index === -1) return false
        else{
            if(!hash.hasOwnProperty(t[i])){
                hash[t[i]] = []
                hash[t[i]].push(i)
            }else{
                var newIndex = helper(hash[t[i]], s, t[i])
                if( newIndex === -1) return false
                hash[t[i]].push(newIndex)
            }
        }
    }
    return true
}

function helper(arr, s, char){
    var index = -1
    for(var i = 0; i < s.length; i++){
        if(s[i] === char && !contain(arr, i)) {
            index = i
            break
        }
    }
    return index
}

function contain(arr, i){
    return arr.some(function(a){
        return a === i
    })
}

console.log(containAll('AA', 'AAA'))

console.log(containAll('AAA', 'AA'))

console.log(containAll('AAA', ''))