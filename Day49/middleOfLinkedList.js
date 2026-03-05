var middleNode = function(head) {

    let slow = head;
    let fast = head;

    while(fast !== null && fast.next !== null){

        slow = slow.next;
        fast = fast.next.next;  
    }

    // returning the node after the middle
    return slow;
};

const head = { val: 1, next: { val: 2, next: { val: 3, next: null } }}
const output = middleNode(head);
console.log(output);

