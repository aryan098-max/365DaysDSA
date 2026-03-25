/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {

    let sentinel = new ListNode();
    sentinel.next = head;

    let prev = sentinel;
    let curr = head;

    let length = 0;
    while(curr !== null){
        length++;
        curr = curr.next;
    }

    let k = length - n;

    // run a for loop to reach preNode
    for(let i=0; i<k; i++){
        // Keep moving prev and it will stop just prevNode of nth
        prev = prev.next;
    }

    let prevNode = prev;

    // Finally, removing nth node
    prevNode.next = prevNode.next.next;

    // retun 
    return sentinel.next;
};