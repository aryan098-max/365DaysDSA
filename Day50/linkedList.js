function ListNode(val, next){

    this.val = val; // (val === undefined ? 0 : val)
    this.next = next; // (next === undefined ? null : next)
}

// Node creation

const node4 = new ListNode(4);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const head = new ListNode(1, node2);

console.log(head);
