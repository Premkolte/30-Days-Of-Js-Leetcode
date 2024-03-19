/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let cout=init;
    function increment(){
        return ++cout;
    }
    function decrement(){
        return --cout;
    }
    function reset(){
        cout=init;
        return cout;
    }
    return {
        increment:increment,
        decrement:decrement,
        reset:reset
    }

};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */