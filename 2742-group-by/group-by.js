/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
    const ans = {};
    this.forEach((el,idx) => {
        const key = fn(el);
         if (!ans.hasOwnProperty(key)) {
      ans[key] = [];
    }
     ans[key].push(el);
    })
    return ans;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */