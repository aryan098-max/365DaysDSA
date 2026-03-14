
// Definition for singly-linked list.
 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 }
 
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    
     let slow = head;
    let fast = head;

    // find middle of the linked list
    while(fast !== null && fast.next !== null){

        slow = slow.next;
        fast = fast.next.next;
    }

    // Reversing the linked list making middle null
    let prev = null;
    let curr = slow;

    while(curr !== null){

        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    // checking whether palindrome or not
    let firstHalf = head;
    let secondHalf = prev;

    while(firstHalf !==null && secondHalf !== null){

        if(firstHalf.val !== secondHalf.val){
            return false;
        }

        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
    }
    
    return true;
};

const node3 = new ListNode(1);            // { val: 3, next: null }
const node2 = new ListNode(2, node3);     // { val: 2, next: node3 }
const node1 = new ListNode(2, node2);
const head  = new ListNode(1, node1);     // { val: 1, next: node2 }
const output = isPalindrome(head);
console.log(output);