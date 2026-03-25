/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {

    let slow = head;
    let fast = head;

    // find the middle of the linked list
    while(fast !== null && fast.next !== null){

        slow = slow.next;
        fast = fast.next.next;
    }

    // middle of the linked list is found
    let prev = null;
    let curr = slow;

    // Reversing the second half of the linked list
    while(curr !== null){
        
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    // prev reaches the last node
    let firstHalf = head;
    let secondHalf = prev;

    // Run the the loop until middle element is reached which is null
    while(firstHalf !== null && secondHalf !== null){

        if(firstHalf.val !== secondHalf.val){
            return false;
        }

        // keep moving firstHalf and secondHalf forward
        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
    }
    return true;
};