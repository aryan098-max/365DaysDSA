function ListNode(val, next) {
    this.val = val;
    this.next = next || null;
 }


var getIntersectionNode = function(headA, headB) {

    let pA = headA;
    let pB = headB;

    // unless until pA === pB

    while(pA !== pB){

        if(pA === null){
            pA = headB;
        } else {
            pA = pA.next;
        }

        if(pB === null){
            pB = headA;
        } else {
            pB = pB.next;
        }
    }
    
    return pA;
};

// headA
const node4 = new ListNode(4);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const headA = new ListNode(1, node2);

// headB
const node6 = new ListNode(6, node2);
const headB = new ListNode(7, node6);

console.log(headA);
console.log(headB);
// calling the intersection function
const output = getIntersectionNode(headA, headB);
console.log(output);