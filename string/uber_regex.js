//？ match 1anything
//* match 0 or one same repeating chart
//str reg result
normal('a','?')   //true
normal('ab',  'a?')   //true
normal('ant', 'a*t')  //true
normal('annt', 'a*t') //true
normal('annt', 'a*nt') //true
normal('annnt', 'an*nt') //true
normal('anbt', 'a*nt') //false
normal('anbt', 'a**t') //true
normal('anbt', 'an**') //true

//最直观的想法就是一边一个指针 一边跑一边判断
function normal(str, reg){
    var i = 0
    var j = 0
    
    while(i < str.length && j < reg.length){
        if(reg[j] === '?'){
            i++
            j++
            continue
        }
        if(reg[j] !== '*'){
            if(str[i] !== reg[j]) return false
            i++
            j++
        }else{
            return (star(str.slice(i), reg.slice(j), str[i])) 
        }
    
    }
    return i === str.length && j === reg.length
}

//有星星就判断 星星代表当前char 或 星星不代表任何
function star(str, reg, current){
    //what's base case？
    if(str.length === 0) return true
    
   //fuck you complier
   //console.log(str, reg, current)
   if(str[0] === current) return star(str.slice(1), reg, current) || normal(str, reg.slice(1))
    else return normal(str, reg.slice(1))  
}
