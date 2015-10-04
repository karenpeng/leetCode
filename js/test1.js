// 实现一个函数 parallel，第一个参数是一个数组，是一系列的异步函数，
// 第二个参数是一个 callback，执行的时候会并发的执行函数数组，
// 当全部函数执行完的时候调用 callback，参数为之前所有异步函数的结果组成的数组。
// 如果要增加一个参数用来控制并发数，如何重构。

parallel([get.bind(get, 1), get.bind(get, 2)], function (err, res) {
  console.log(res) // res 是按顺序的两个异步函数执行的结果
})

function get(input, callback) {
  setTimeout(callback.bind(null, null, input), Math.random() * 1000);
}

function parallel(arr, cb){
  var result = []
  arr.forEach(function(f, index){
    f(index, function(err, res){
      if(err) return 
      result.push(res)
      if(result.length === arr.length){
        cb(result)
      }
    })
  })
}