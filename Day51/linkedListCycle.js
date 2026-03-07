function ListNode(val, next){

    this.val = val; // (val===undefined ? 0 : val)
    this.next = next; // (next===undefined ? null : next)
}


var hasCycle = function(head) {

    let curr = head;
    let seenNode = new Set();

    while(curr !== null){

        if(seenNode.has(curr)){
            return true;
        }

        // move to the next node
        seenNode.add(curr);
        curr = curr.next;
    }  

    return false;
};

// Node formation
const node4 = new ListNode(4);
const node3 = new ListNode(3, node4);            // { val: 3, next: null }
const node2 = new ListNode(2, node3);     // { val: 2, next: node3 }
const head  = new ListNode(1, node2);     // { val: 1, next: node2 }

// cycle node
// node4.next = head;
node4.next = node2;

// calling the function
const output = hasCycle(head);
console.log(output);



