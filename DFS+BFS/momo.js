for(var i = 0; i < 5; i++){
  setTimeout(function(){
    //console.log(i)
  }, i * 1000)
}

for(var i = 0; i < 5; i++){
  (function(i){
    setTimeout(function(){
    console.log(i)
  }, i * 1000)}(i))
}

for(var i = 0; i < 5; i++){
  setTimeout((function(i, j){
    return function(){
      console.log(i + 'haha')
    }
  })(i, 0), i * 1000)
}