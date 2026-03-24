var MinStack = function() {

    this.s1 = [];    
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {

    // The stack has two values array of array [val, minVal]

    // inserting elements for the firsttime
    // pushing an array [val, val] - second val is minVal
    if(this.s1.length === 0){
        this.s1.push([val, val]);
    } else {
        // comparing the currVal with the existing minVal
        // this.s1[s1.length-1][1] - previously pushed minVal
        let lastMinVal = this.s1[this.s1.length-1][1];
        let minVal = Math.min(val, lastMinVal);
        this.s1.push([val, minVal]);
    }
    
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    // The goal is to pop the first element that's all
    this.s1.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    // I am storing [val, minVal] [0]th index gives me val
    return this.s1[this.s1.length-1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    // I am storing [val, minVal] 1th index gives me minVal
    return this.s1[this.s1.length-1][1];ß
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */