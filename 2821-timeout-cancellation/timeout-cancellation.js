/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
  let timeoutId;

  const cancelFn = () => {
    clearTimeout(timeoutId);
  };

  timeoutId = setTimeout(() => {
    const result = fn(...args); 
    
  }, t);

  return cancelFn;
};
