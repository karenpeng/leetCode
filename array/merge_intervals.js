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
    intervals.sort(function(a, b){
        return a.start - b.start
    })
    for(var i = 0; i < intervals.length; i++){
        if(result.length === 0 || result[result.length-1].end < intervals[i].start){
            //put it in while it's less than me
            result.push(intervals[i])
        }else{
            //keep eating it!
            result[result.length-1].end = Math.max(result[result.length-1].end, intervals[i].end)
        }
    }
    return result
};