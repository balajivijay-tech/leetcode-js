/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hs = new Map();
    for(let i=0; i<nums.length; i++){
        let rem = target - nums[i]
        if(hs.has(rem)){
            return [i, hs.get(rem)]
        }else{
            hs.set(nums[i],i)
        }
    }
};