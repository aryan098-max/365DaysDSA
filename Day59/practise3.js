var addTwoNumbers = function(l1, l2) {

    let dummySentinel = new ListNode();
    // attach dummyHead to the sentinel node
    let dummySentinelHead = dummySentinel;
    let carry = 0; // we are going to use this condition for running the loop

    // loop will run either l1 || l2 || carry exists
    while(l1 || l2|| carry){
        // must add carry initially zero
        let sum = (!l1 ? 0: l1.val) + (!l2 ? 0: l2.val) + carry;
        carry = Math.floor(sum/10);
        let digit = sum % 10; // create a newNode with this

        let newNode = new ListNode(digit);
        dummySentinel.next = newNode;
        dummySentinel = dummySentinel.next; // attach itself to new Node

        // Keep moving l1 and l2 and check whether they have become null or not
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
    }
    return dummySentinelHead.next; // points to starting of the node
    
};