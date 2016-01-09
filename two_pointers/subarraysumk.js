

function subarraySum(arr, k){
  var hash = {}
  var sum = 0
  var result = 0
  arr.forEach(function(item, index){
    sum += item 
    if(sum === k) result ++
    if(hash[sum-k]) result ++
    hash[sum] = true

  })
  return result
}

console.log(subarraySum([1,2,3], 3)) //=> 2
console.log(subarraySum([1,2,3,4,2], 9)) //=> 1
console.log(subarraySum([1,2,-2,-1], 0)) //=> 2
