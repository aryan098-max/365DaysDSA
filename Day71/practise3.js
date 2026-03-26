/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {

    let sentinel = new ListNode();
    let sentinelDummy = sentinel;
    
    while(l1 !== null || l2 !== null){

        if(l2 === null || (l1!== null && l1.val < l2.val)){
            
            let newNode = new ListNode(l1.val);
            sentinel.next = newNode;
            sentinel = sentinel.next;
            // keep l1 moving forward as well
            l1 = l1.next;
            
        } else{
            let newNode = new ListNode(l2.val);
            sentinel.next = newNode;
            sentinel = sentinel.next;
            l2 = l2.next;
        }
    }

    return sentinelDummy.next;
};