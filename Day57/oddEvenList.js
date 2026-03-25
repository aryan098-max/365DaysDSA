var oddEvenList = function(head) {

    // checking constraint
    if(head !== null || head.next !== null){
        return head;
    }

    let odd = head;
    let even = head.next;
    let evenStart = even;

    // moving two steps forward
    while(odd.next !== null && even.next !==null){
    // while(even !== null && even.next !== null) // odd is always behind even

        // moving two steps ahead
        odd.next = odd.next.next;
        even.next = even.next.next;

        // moving to the node that we have pointed odd and even
        odd = odd.next;
        even = even.next;
    }
    // Now, make sure that odd is pointing to evenStart
    odd.next = evenStart;
    return head;
}