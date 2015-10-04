// 实现一个函数 sequence，参数是一个数组，是一系列的异步函数，
// 返回一个新的函数，这个新的函数在调用的时候，会顺序的执行之前传递给 sequence 的函数数组，
// 前一个函数的返回值作为下一个函数的参数，新函数的参数前面部分会传递给函数数组的第一个函数，
// 当全部执行完成后，调用 新函数的 callback。

sequence([add1, add2])(1, function (err, res) {
  console.log(res) // 4
})

function add1(input, callback) {
   setTimeout(callback.bind(null, null, input + 1), 1000);
}
function add2(input, callback) {
  setTimeout(callback.bind(null, null, input + 2), 1000);
}

function sequence(arr){

  return function haha(param, cb){
    if(arr.length === 0){
      cb(null, param)
      return
    }
    var cur = arr.shift()
    cur(param, function(err, res){
      if(err) return cb(err)
      haha(res, cb)
    })
  }
}