function deepCopy(arr){
  var out = []
  arr.forEach(function(el){
    if(Array.isArray(el)){
      out.push(deepCopy(el))
    }else out.push(el)
  })
  return out
}


var a = [[1,2], 3, [4, [5,[6,7]]]]
var b = deepCopy(a)
a.push([4,5])
console.log(a)
console.log(b)