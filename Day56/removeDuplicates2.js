/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {

    if(head === null){
        return head;
    }
    let sentinel = new ListNode();
    sentinel.next = head;
    let prev = sentinel;

    let curr = head;
    let uniqueSet = new Set();

    while(curr !== null){
        
        if(!uniqueSet.has(curr.val)){
            uniqueSet.add(curr.val);

            // creating a new node each time
            let newNode = new ListNode(curr.val);
            prev.next = newNode;
            prev = prev.next;

        } else{
            curr = curr.next;
        }
        
    }

    return sentinel.next;

};