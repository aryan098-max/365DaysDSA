function ListNode(val, next){

    this.val = val; // (val===undefined ? 0 : val)
    this.next = next; // (next===undefined ? null : next)
}


var reverseList = function(head) {

    let prev = null;
    let curr = head;

    while(curr !== null){

        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    // prev stays behind others go out of bound
    head = prev;
    return head;
};

// const head = { val: 1, next: { val: 2, next: { val: 3, next: null } }}
// const output = reverseList(head);
// console.log(output);

const node3 = new ListNode(3);            // { val: 3, next: null }
const node2 = new ListNode(2, node3);     // { val: 2, next: node3 }
const head  = new ListNode(1, node2);     // { val: 1, next: node2 }
const output = reverseList(head);
console.log(output);


