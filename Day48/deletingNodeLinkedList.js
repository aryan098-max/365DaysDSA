function Node(val){
    this.val = val;
    this.next = null;

    // returns this implicitly, which is pointing towards an empty obj
}

var MyLinkedList = function() {
    
    this.head = null;
    this.size = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {

    // calling Node constructor function, this is the obj before the dot
    // Look at the example at practise3.js
    let newNode = new Node();
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {

    let newNode = new Node(val);

    // The node being added is the first node itself case
    if(this.head === null){

        this.head = newNode;
    } else{
        let currNode = this.head;
        // traverse the list using while loop
        while(currNode.next !== null){
            currNode = currNode.next;
        }
        
        // after finding the end of the node & no need to do newNode.next = null
        currNode.next = newNode;
    }
    // Finally, increase the size;
    this.size++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {

    let newNode = new Node(val);

    if(index === 0){

        this.addAtHead(val);
        return;

    } else if(index === this.size){
        
        this.addAtTail(val);
        return;
    } else {

        let currNode = this.head;

        // run a for loop to reach index-1
        for(let i=0; i<index-1; i++){
            currNode = currNode.next;
        }

        newNode.next = currNode.next;
        currNode.next = newNode;

    }
    this.size++;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    
};


// Your MyLinkedList object will be instantiated and called as such:
var obj = new MyLinkedList()
var param_1 = obj.get(index)
obj.addAtHead(val)
obj.addAtTail(val)
obj.addAtIndex(index,val)
obj.deleteAtIndex(index)
 