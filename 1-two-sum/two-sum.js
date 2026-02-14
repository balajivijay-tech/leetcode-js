/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let prevMap = new Map();
    for(let i=0; i<nums.length; i++){
        let prevValue = target - nums[i]
        if(prevMap.has(prevValue)){
            return [i, prevMap.get(prevValue)]
        }else{
            prevMap.set(nums[i], i);
        }
    }
};