
var MyStack = function() {
    this.q1 = [];
    this.q2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q1.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    // Implementing pop using two queues

    let n = this.q1.length;

    for(let i=0; i<n-1; i++){
        let frontEle = this.q1.shift();
        this.q2.push(frontEle);
    }

    // q1 has one last element remaining
    let poppedEle = this.q1.shift();

    // Swapping q2 with q1 as we have pushed all the elements inside q2
    let temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp;

    return poppedEle;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {

   let n = this.q1.length;

    for(let i=0; i<n-1; i++){
        let frontEle = this.q1.shift();
        this.q2.push(frontEle);
    }

    // let TopEle = this.q1[0]; // allowed because I am only peaking
    let TopEle = this.q1.shift();

    // pushing element back to q2 after extracting it
    // this.q2.push(this.q1.shift()) 
    this.q2.push(TopEle);

    // Swapping q2 with q1 as we have pushed all the elements inside q2
    let temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp;

    return TopEle;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {


    // one liner - this.q1.length === 0 // returns true
    // compariosn operators return true or false
    
    // return true when list is empty
    if(this.q1.length === 0){
        return true
    } else {
        return false;
    }
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */