/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {

    // List has 0 node or 1 node
    if(head === null || head.next === null ){
        return head;
    }
    
    let curr = head;
    let slow = head;
    let fast = head;
    let length = 0;

    while (curr !== null){
        curr = curr.next;
        length ++;
    }

    // Run fast till k-1
    let rTimes = k % length;
    for(let i=0 ; i<rTimes; i++){
        
        // prev stops just before the k
        fast = fast.next;
    }

    // Run slow and fast together as fast has reached k-1;
    while(fast.next !== null){
        slow = slow.next;
        fast = fast.next;
    }

    // fast reaches to last node and stops now we can point to head
    fast.next = head;

    // creating new head
    let newHead = slow.next;

    // last node pointing to null now
    slow.next = null;

    // return new head;
    return newHead;

};