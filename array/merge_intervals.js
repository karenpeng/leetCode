/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    intervals.sort(function(a, b){
        return a.start - b.start
    })
    var result = []
    for(var i = 0; i < intervals.length;i++){
        if(i < intervals.length - 1){
            var f = intervals[i]
            var b = intervals[i+1]
            if(f.end < b.start) result.push(f)
            else{
                intervals[i+1].start = intervals[i].start
                intervals[i+1].end = Math.max(intervals[i+1].end, intervals[i].end)
            }
        }else{
            result.push(intervals[intervals.length-1])
        }
    }
    
    return result
};


/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
  if(intervals.length <= 1) return intervals
  intervals.sort(function(a, b){
      return a.start - b.start || a.end - b.end
  })
  
  var bucket = []
  for(var i = 0; i < intervals.length -1 ; i++){
      if(intervals[i].end < intervals[i+1].start){
          bucket.push(intervals[i])
      }else{
          intervals[i+1].start = intervals[i].start
          intervals[i+1].end = Math.max(intervals[i].end, intervals[i+1].end)
      }
      if(i === intervals.length - 2) {
        bucket.push(intervals[i+1])
      }
  }
  return bucket
};
/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    var result = []
    
    //记得sort啊！！！
    intervals.sort(function(a, b){
        return a.start - b.start    
    })
    
    for(var i = 0; i < intervals.length; i++){
                                //如果我在你的前面
        if(result.length === 0 || result[result.length-1].end < intervals[i].start){
            //那么把你拿进来
            result.push(intervals[i])
        }else{
            //如果我不在你前面            就把你吃掉
            result[result.length-1].end = Math.max(result[result.length-1].end, intervals[i].end)
        }
    }
    return result
};
