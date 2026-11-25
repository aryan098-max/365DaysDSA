// # 206. Reverse Linked List

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