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

const head = { val: 1, next: { val: 2, next: { val: 3, next: null } }}
const output = reverseList(head);
console.log(output);
