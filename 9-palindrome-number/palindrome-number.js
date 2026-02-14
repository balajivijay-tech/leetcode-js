/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let revNum = 0
    let num = x
    while(num > 0){
        revNum = num%10 + revNum*10
        num = Math.floor(num/10)
    }
    console.log(x)
    console.log(revNum)
    return x == revNum;

};