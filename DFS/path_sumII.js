function Node(val){
  this.val = val
  this.left = null
  this.right = null
}

function main(root, sum){
  var result = []
  helper(root, sum, 0, [], result)
  return result
}

function helper(root, sum, mySum, list, result){
  
  mySum += root.val
  list.push(root.val)
  
  if(root.left === null && root.right === null && sum === mySum){
    result.push(deepCopy(list))
  }
  
  if(root.left !== null){
    helper(root.left, sum, mySum, list, result)
    list.pop()
  }
  
  if(root.right !== null){
    helper(root.right, sum, mySum, list, result)
    list.pop()
  }
  
}

function deepCopy(arr){
  return arr.map(function(item){
    return item
  })
}

var a = new Node(1)
var b = new Node(2)
var c = new Node(3)
var d = new Node(1)

a.left = b
a.right = c
b.left = d

console.log(main(a, 4)) //=> [[1,2,1], [1,3]]


