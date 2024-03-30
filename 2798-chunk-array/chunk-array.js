/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let a=[]
    let i=0
    while(i<arr.length){
        a.push(arr.slice(i,i+size))
        i+=size
    }
    return a
};