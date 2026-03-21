function ListNode(val, next){

    this.val = (!val ? 0: val);
    this.next = (!next ? null: next);
}

var mergeTwoLists = function(l1, l2) {

    // base case l1 or l2 null
    // if(!l1) return l2;
    // if(!l2) return l1;

    // After, introducing sentinel node no need to check for !l1 and !l2
    let sentinel = new ListNode();
    let curr = sentinel;

    // No need to find the starting point now we got the starting point now
    // if(l1.val < l2.val){

    //     curr = l1;
    //     l1 = l1.next; 
    // } else {
    //     curr = l2;
    //     l2 = l2.next;
    // }

    // Now, navigating through the linked list to sort it
    // Run the loop until one of the list is exhausted
    while(l1 !== null && l2 !== null){

        if(l1.val < l2.val){
            // In this line we are pointing the sentinel.next to starting of the node
            // curr and sentinel is attached to the same box, so curr.next = l1 means
            // sentinel.next is also pointing to l1;
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }

        // Keep moving curr as well
        curr = curr.next;
    }

    // Finally, after the loop breaks when one of the list is exhausted
    if(l1 === null){
        curr.next = l2;
    }

    if(l2 === null){
        curr.next = l1;
    }
    
    // As start is pointing to head now
    return sentinel.next;
};

const l1 = {val: 1, next: { val: 2, next: { val: 4, next: null}}};
const l2 = { val: 1, next: { val: 3, next: { val: 4, next: null } } };
const output = mergeTwoLists(l1, l2);
console.log(output);
