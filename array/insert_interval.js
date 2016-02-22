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
    var inserted = false
    var result = []
    intervals.forEach(function(item){
        if(inserted) {
            result.push(item)
            return
        }
        if(item.end < newInterval.start){
            result.push(item)
            return
        }
        if(item.start > newInterval.end){
            result.push(newInterval)
            result.push(item)
            inserted = true
            return
        }
        newInterval.start = Math.min(item.start, newInterval.start)
        newInterval.end = Math.max(item.end, newInterval.end)
    })
    if(!inserted) result.push(newInterval)
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
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
    var result = []
    var isInsert = false
    for(var i = 0; i < intervals.length; i++){
        //如果a已经被插入了，则只要插入I(i)就行
        if(isInsert){
            result.push(intervals[i])
        }
        //如果a在I(i)前，则先插入a再插入I(i)到结果
        else if(newInterval.end < intervals[i].start){
            result.push(newInterval)
            result.push(intervals[i])
            //remember to set it back to true
            isInsert = true
        }
        //如果a和I(i)有重合，则将I(i)合并入a，但并不插入结果!!!
        //remember how to detect overlap???
        else if(newInterval.start <= intervals[i].end && newInterval.end >= intervals[i].start){
            newInterval.start = Math.min(newInterval.start, intervals[i].start);
            newInterval.end = Math.max(newInterval.end, intervals[i].end);
        }
        //如果a在I(i)后，则插入I(i)到结果
        else result.push(intervals[i])
    }
    if(!isInsert) result.push(newInterval)
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
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
    var result = []
    var isInsert = false
    intervals.forEach(function(i){
        if(isInsert){
            result.push(i)
        }else if(newInterval.end < i.start){
            result.push(newInterval)
            result.push(i)
            isInsert = true
        }else if(newInterval.start <= i.end && newInterval.end >= i.start){
            newInterval.start = Math.min(newInterval.start, i.start)
            newInterval.end = Math.max(newInterval.end, i.end)
        }else{
            result.push(i)
        }
    })
    if(!isInsert) result.push(newInterval)
    return result
};
