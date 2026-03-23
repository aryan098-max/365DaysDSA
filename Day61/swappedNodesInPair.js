var swapPairs = function(head) {

    // List 0 nodes corner case
    if(head === null || head.next === null){
        return head;
    }

    // dummy node
    let sentinel = new ListNode();
    sentinel.next = head;

    let p = sentinel;
    let c = head;
    let n = head.next;

    while(c !== null && n!== null){

        // Change the next of p c and n for swapping
        p.next = n;
        c.next = n.next;
        n.next = c;

        // Moving p, c, & n forward for the next iteration
        p = c;
        c = p.next;
        n = c && c.next; // c becomes null so adding c null check
    }

    // Finally returning head node
    return sentinel.next;
    
};