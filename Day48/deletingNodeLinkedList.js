function Node(val){
    this.val = val;
    this.next = null;

    // returns this implicitly, which is pointing towards an empty obj
}

var MyLinkedList = function() {
    
    this.head = null;
    this.size = 0;
};

MyLinkedList.prototype.print = function() {
    let result = [];
    let curr = this.head;
    while (curr) {
        result.push(curr.val);
        curr = curr.next;
    }
    console.log(result.join(" -> "));
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    
    // index starting from 0 index 1; index>=size

    if(index<0 || index>=this.size){
        return -1;
    } 

    // currNode
    let currNode = this.head;

    for(let i=0; i<index; i++){
        currNode = currNode.next;
    }
    return currNode.val;    
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {

    // calling Node constructor function, this is the obj before the dot
    // Look at the example at practise3.js
    let newNode = new Node(val);
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

    if (index > this.size || index < 0) return; // Added bounds check

    if(index === 0){
        this.addAtHead(val);
        return;

    } else if(index === this.size){
        this.addAtTail(val);
        return;
    } else {

        let newNode = new Node(val);
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

    // first corner case
    if(index<0 || index >= this.size){
        return;
    }

    // second corner case, delete first index, head

    if(index === 0){
        this.head = this.head.next;
    } else {

        let currNode = this.head;

        // run a loop till index-1 to reach the prev to prev index
        for(let i=0; i<index-1; i++){

            currNode = currNode.next;
        }

        currNode.next = currNode.next.next;
    }
    this.size--;
};


// Your MyLinkedList object will be instantiated and called as such:
var obj = new MyLinkedList()
// var param_1 = obj.get(index);
obj.addAtHead(2);
obj.addAtHead(3);
obj.addAtHead(4);
obj.addAtHead(5);
obj.addAtHead(6);
obj.addAtTail(7);
// obj.addAtIndex(4,8);
// obj.deleteAtIndex(3);
console.log(obj);
obj.print();
 