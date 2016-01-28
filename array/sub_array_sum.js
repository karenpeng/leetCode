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
