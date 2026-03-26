/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

    let sentinel = new ListNode();
    let sentinelDummy = sentinel;
    let carry = 0;

    while(l1 || l2 || carry){

        let sum = (!l1 ? 0: l1.val) + (!l2 ? 0 : l2.val) + carry;
        carry = Math.floor(sum/10);
        let digit = sum % 10;

        // After calculating digit we are going to create new node using digit
        let newNode = new ListNode(digit);
        sentinel.next = newNode;
        sentinel = sentinel.next;

        // Moving l2 and l2 head as well if it it exists
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
    }

    return sentinelDummy.next;
    
};