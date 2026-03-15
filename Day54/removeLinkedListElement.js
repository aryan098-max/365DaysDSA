
//  Definition for singly-linked list.
 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 }


var removeElements = function(head, val) {
    
    // creating a sentinel node
    let sentinel = new ListNode();
    sentinel.next = head;

    let prev = sentinel;

 // while moving pointer two steps ahead check for both prev and prev.next !== null
    while(prev !== null && prev.next !== null){

        if(prev.next.val === val){
            prev.next = prev.next.next;
        } else {
            prev = prev.next;
        }
    }

    return sentinel.next;
};

// Passing nodes
const node4 = new ListNode(4);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const head = new ListNode(1, node2);

// calling the function
const output = removeElements(head, 2);
console.log(output);

