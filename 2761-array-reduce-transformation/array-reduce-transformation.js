/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
    // let init = init ?? nums[0]
    // let result = init
    // nums.forEach((value, index) => {
    //     result = fn(result, value)
    // })

    let last = init;

    last = nums.reduce(fn, last );
    
    return last;
    // return result
};