/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
    var bucket = [];
    var insert = false;
    intervals.forEach(function(item){
       if(insert) bucket.push(item);
       else{
           if(item.end < newInterval.start){
               bucket.push(item);
           }else if(item.start > newInterval.end){
               bucket.push(newInterval);
               bucket.push(item);
               insert = true;
           }else{
                newInterval.start = Math.min(item.start, newInterval.start);
                newInterval.end = Math.max(item.end, newInterval.end);
           }
       }
    });
    if(!insert) bucket.push(newInterval);
    return bucket;
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
