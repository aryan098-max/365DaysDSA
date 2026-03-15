
//  Definition for singly-linked list.
 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 }


var removeElements = function(head, val) {
    
    // creating a sentinel node
    let sentinel = new ListNode(0);
    sentinel.next = head;

    let length = 0;
    while(head !== null){
        head = head.next;
        length++;
    }

    // Introduce prevPos and prev
    let prevPos = length - n;
    let prev = sentinel;

    // Run a loop to move prev to the prevPos
    for(let i=0; i<prevPos; i++){
        // move prev to prevPos
        prev = prev.next;
    }
    // finally remove the link to the Nth node
    prev.next = prev.next.next;

    // return sentinel.next to cover the head being Nth index
    return sentinel.next;

}

// Passing nodes
const node4 = new ListNode(4);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const head = new ListNode(1, node2);

// calling the function
const output = removeElements(head, 2);
console.log(output);

