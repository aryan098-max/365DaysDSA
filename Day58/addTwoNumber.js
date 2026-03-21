var addTwoNumbers = function(l1, l2) {

    let dummy = new ListNode();
    let dummyHead = dummy;
    let carry = 0;

    while(l1 || l2 || carry){

        // We must check if l1 or l2 has value or they are exhausted (null)
        // Must add carry as well
        let sum = (!l1 ? 0 : l1.val) + (!l2 ? 0: l2.val) + carry;

        // carry means sum is greater than 10; sum/10
        carry = Math.floor(sum/10);

        // digit means modulus of val; dry run the code
        let digit = sum % 10;

        // Creating a new node using the digit
        let newNode = new ListNode(digit);

        // dummy is a sentinel node therefore, make it point to new node
        dummy.next = newNode;
        dummy = dummy.next; // move dummy as well to point to new value

        // move l1 and l2 if they exists for covering corner case
        // && checks if l1 exists because after the l1 is exhausted it points to null
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
    }

    // dummyHead is at sentinel node we want to go to the node it is pointing
    return dummyHead.next;
};
