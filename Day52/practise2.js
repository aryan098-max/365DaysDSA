function ListNode(val, next){

    this.val = (val === undefined ? 0:val);
    this.next = (next === undefined ? null:next);

}

var middleofLinkedList = function (head){
    
    let slow = head;
    let fast = head;

    // moving slow ->, fast ->->
    while(fast!== null && fast.next!==null){

        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}


const node3 = new ListNode(1);            // { val: 3, next: null }
const node2 = new ListNode(3, node3);     // { val: 2, next: node3 }
const node1 = new ListNode(4, node2);     // { val: 2, next: node1}
const head  = new ListNode(5, node1);     // { val: 1, next: node2 }
const output = middleofLinkedList(head);
console.log(output);