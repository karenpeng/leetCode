function parallel(arr, max, cb){
  var result = []
  var count = 0
  var next = max - 1
  var done = false

  for(var i = 0; i < max; i++){
    (function(index){
      arr[index](function(err, res){
        myCb(err, res, index)
      })
    })(i)
  }

  function myCb(err, res, i){

    console.log(i)
    if(done) return 

    if(err) {
      done = true
      cb(err)
      return
    }

    result[i] = res
    count ++

    if(count === arr.length){
      return cb(null, result)
    }

    if(next < arr.length - 1){
      next++
      // (function(haha){
      //   arr[haha](function(err, res){
      //     myCb(err, res, haha)
      //   })
      // })(next)
      var index = next
      arr[index](function(err, res){
        myCb(err, res, index)
      })
    }
  }
}

function get(input, callback) {
  setTimeout(callback.bind(null, null, input), Math.random() * 1000);
}

parallel([get.bind(get, 1), get.bind(get, 2),get.bind(get, 3), get.bind(get, 4),get.bind(get, 5), get.bind(get, 6)], 3, function (err, res) {
  console.log(res) // res 是按顺序的两个异步函数执行的结果
})