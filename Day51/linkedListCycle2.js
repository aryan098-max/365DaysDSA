function ListNode(val) {
     this.val = val;
     this.next = null;
 }


var hasCycle = function(head) {

     // corner case empty list
    if(head === null){
        return false;
    }

    let slow = head;
    let fast = head.next;

    // keep running the loop until slow & fast pointer meet
    while(slow !== fast){

        // null case, why || here because I want the case to pass
        if(fast === null || fast.next === null){
            return false
        }

        slow = slow.next;
        fast = fast.next.next;
    }

    // when slow becomes fast the while loop breaks
    return true;

}; 

const node4 = new ListNode(4);
const node3 = new ListNode(3, node4);
const node2 = new (ListNode(2, node3));
const head = new (1, node2);

// Creating a cycle
node4.next = node2;

// calling function
const output = hasCycle(head); 