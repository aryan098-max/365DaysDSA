var swapPairs = function(head) {
    
    if(head === null || head.next === null){
        return head; // head is null at the last recursion
    }

    let left = head;
    let right = head.next;

    left.next = swapPairs(right.next);
    right.next = left;
    return right;
};