/**
 * @param {string} s
 * @return {boolean}
 */

function isValidParenthesis(l, r){
    switch(l){
        case '{':
            return r=='}'
        case '(':
            return r==')'
        case '[':
            return r==']'
    }    
}
var isValid = function(s) {
    let amap = []
    for(let i=0; i<s.length; i++){
        if(s[i] === '{' || s[i] === '[' || s[i] === '('){
            amap.push(s[i])
        }else{
            if(isValidParenthesis(amap.pop(),s[i])){
                continue
            }
            return false
        }

    }
    return amap.length === 0
};