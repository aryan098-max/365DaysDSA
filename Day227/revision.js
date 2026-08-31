var removeElements = function(head, val) {
    

    // Introduce a sentinel node
    let sentinel = new ListNode();
    sentinel.next = head;
    let prev = sentinel;

    while(prev !== null && prev.next !== null){

        if(prev.next.val === val){

            prev.next = prev.next.next;
        } else {
            prev = prev.next;
        }
    }

    return sentinel.next;  
};
