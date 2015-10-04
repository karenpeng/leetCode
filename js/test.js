var fs = require('fs')
var path = require('path')

//i can't use star？？
//fs.readFile('/*.js', 'utf8', function (err, data) {
fs.readdir('/Users/karen/Documents/my_project/leetCode/DFS+BFS', function(err, fileNames){
  if(err) throw err

  var max = 0
  var result = ''
  var counter1 = 0
  var counter2 =0

  fileNames.forEach(function(file){

    if(path.extname(file) === '.js'){
      counter1 ++

      fs.readFile(file,'utf8', function (err, data) {
        if (err) throw err
        var arr = data.split('\n')
        counter2++
        
        for(var i = 0; i < arr.length; i++){
          if(arr[i].length > max){
            max = arr[i].length
            console.log(max)
            result = arr[i]
          }
        }
        
        if(counter2 == counter1){
          console.log(result)
          return result
        }

      })

    }

  })

})
