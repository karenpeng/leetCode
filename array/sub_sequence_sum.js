console.log(subArraySum([1,2,3,4,5,6,5,4,3,2,1], 6)) //=> [[1,3], [7,9]]

function subArraySum(arr, target){
  var sum = 0
  var hash = {}
  var result = []
  
  for(var i = 0; i < arr.length; i++){
    sum += arr[i]
    
    if(sum === target){
      result.push([0, i])
    }
    
    if(hash.hasOwnProperty(sum - target)){
      //why plus one?
      result.push([hash[sum - target] + 1, i])
      
    }else{
      
      hash[sum] = i
      
    }
  }
  
  return result
}

console.log(subSequenceSum([1,2,3,4,5,6,5,4,3,2,1], 6)) 
// =>[1,2,3], [6], [3,2,1], [1,3,2], [1,2,3], [2,3,1], [2,3,1],[3,2,1]

function subSequenceSum(arr, target){
  var result = []
  helper(arr, target, 0, [], result)
  return result
}

function helper(arr, target, begin, list, result){
  if(target === 0){
    result.push(deepCopy(list))
  }
  
  for(var i = begin; i < arr.length; i++){
    list.push(arr[i])
    helper(arr, target - arr[i], i + 1, list, result)
    list.pop()
  }
}

function deepCopy(arr){
  return arr.map(function(el){
    return el
  })
}
