function diameter(root){
  
  if(root === null) return 0
  var result = helper(root)
  return result.diameter
  
}


function helper(root){
  
  if(root === null){
    return{
      h: 0,
      diameter: 0
    }
  }
  
  var l = helper(root.left)
  var r = helper(root.right)
  
  var h = Math.max(l.h, r.h) + 1
  var diameter = Math.max(l.h + r.h + 1, l.diameter, r.diameter)
  
  return {
    h: h
    diameter: diameter
  }
  
}
