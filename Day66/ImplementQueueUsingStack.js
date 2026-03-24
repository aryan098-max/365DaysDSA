
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
    
    let n = this.s1.length;
    for(let i=0; i<n-1; i++){
        let poppedElem = this.s1.pop();
        this.s2.push(poppedElem);
    }

    let poppedElem = this.s1.pop();

    let newLen = this.s2.length;

    for(let i=0; i<newLen; i++){
        let poppedElem = this.s2.pop();
        this.s1.push(poppedElem);
    }
    return poppedElem;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {

    let n = this.s1.length;
    for(let i=0; i<n-1; i++){
        let poppedElem = this.s1.pop();
        this.s2.push(poppedElem);
    }

    let poppedElem = this.s1.pop();
    
    // put it back
    this.s2.push(poppedElem);

    let newLen = this.s2.length;

    for(let i=0; i<newLen; i++){
        let poppedElem = this.s2.pop();
        this.s1.push(poppedElem);
    }
    return poppedElem;
    
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    
    // returns true;
    return this.s1.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */