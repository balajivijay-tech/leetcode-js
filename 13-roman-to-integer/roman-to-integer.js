/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let n = s.length
    let valueMap = new Map([['I',1],['V',5],['X',10],['L',50],['C',100],['D',500],['M',1000]])
    let value = valueMap.get(s[n-1])
    for(let i=n-2; i>=0; i--){
        if(valueMap.get(s[i]) < valueMap.get(s[i+1])){
            value = value - valueMap.get(s[i])
        }else{
            value = value + valueMap.get(s[i])
        }
    }
    return value
};