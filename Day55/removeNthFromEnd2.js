
//  Definition for singly-linked list.
 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 }


var removeElements = function(head, n) {
    
    // creating a sentinel node
    let sentinel = new ListNode(0);
    sentinel.next = head;
    let first = sentinel;
    let second = sentinel;

    // Introduce two pointer first and second, first from sentinel & second from n  

    // Move first to the n
    for(let i=0; i<n; i++){

        first = first.next;
    }

    // Now, after first pointer reaches to n start moving second as well
    // Dry run the code to know why only first.next !== null
    while(first.next !== null){

        first = first.next;
        second = second.next;
    }

    // second will stop at the prev position this is how this code works
    second.next = second.next.next;

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

