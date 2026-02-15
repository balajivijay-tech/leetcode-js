/**
 * @param {string} s
 * @return {boolean}
 */

function isBracesValid(a,b){
    if( a== '(' && b == ')'){
        return true
    }
    if( a== '[' && b == ']'){
        return true
    }
    if( a== '{' && b == '}'){
        return true
    }
    return false
}
var isValid = function(s) {
    if(s.length%2 != 0 ){
        return false
    }
    let bracStack = []
    for(let i=0; i<s.length; i++){
        if(['{','[','('].includes(s[i])){
            bracStack.push(s[i])
        }else{
            if(!isBracesValid(bracStack.pop(),s[i])){
                return false
            }
        }
    }
    return bracStack.length == 0
};