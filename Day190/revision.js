// # 876. Middle of the Linked List

var middleNode = function(head) {

      // We have to use slow and fast pointer to solve this problem

    let slow = head
    let fast = head;

    // I have to use and for the case if fast is already null
    while(fast !== null && fast.next !== null){

        // moving slow ones
        slow = slow.next;

        // moving fast two times
        fast = fast.next.next;
    }
    
    return slow;
    
};
