console.log(wordBreakII("catsanddog", ["cat", "cats", "and", "sand", "dog"])) //=> ["cats and dog", "cat sand dog"]


function wordBreakII(str, dic){
  var result = []
  var f = []

  for(var i = 0; i < str.length + 1; i++){
    f[i] = true
  }
  helper(str, dic, 0, [], result, f)
  return result
}

function helper(str, dic, begin, list, result, f){
  if(begin === str.length){
    result.push(list.join(' '))
  }
  
  for(var i = begin; i < str.length; i++){
    
    var prefix = str.substring(begin, i + 1)
    
    if(!has(dic, prefix)) continue
    if(!f[i + 1]) continue
    
    list.push(prefix)
    var len = result.length
    helper(str, dic, i+1, list, result, f) 
        //look afterwards
    if(result.length === len) f[i+1] = false
    list.pop()
  }
}


function has(dic, word){
  return dic.some(function(item){
    return item === word
  })
}
