
var MyQueue = function() {

    this.s1 = [];
    this.s2 = [];
    
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.s1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    
    // we will copy all the elements to s2 pop only from s2
    if(this.s2.length === 0){
        // until s1 is empty keep popping and pushing inside s1
        while(this.s1.length){
            // ? pop because we have to implement using stack
            this.s2.push(this.s1.pop());
        }
    }

    // s2 has reversed elements serve our purpose of queue
    return this.s2.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {

    if(this.s2.length === 0){

        while(this.s1.length){
            this.s2.push(this.s1.pop())
        }
    }
    // s2 is reversed [4,3,2,1]
    return this.s2[this.s2.length-1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    
    // returns true if both s1 and s2 are empty
    return this.s1.length === 0 && this.s2.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */