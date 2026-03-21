function ListNode(val, next){

    this.val = (!val ? 0: val);
    this.next = (!next ? null: next);
}

var mergeTwoLists = function(list1, list2) {
    
    let sentinel = new ListNode();
    let sentinelCopy = sentinel; // both pointing to same 

    while(list1 !== null || list2 !== null){

        // list1 exhausted
        if((list2 === null) || ((list1 !==null) && list1.val < list2.val)){
            let newNode = new ListNode(list1.val);
            sentinel.next = newNode;
            sentinel = sentinel.next;
            list1 = list1.next;
        } else {
            let newNode = new ListNode(list2.val);
            sentinel.next = newNode;
            sentinel = sentinel.next;
            list2 = list2.next;
        }
    }

    // return sentinel node
    return sentinelCopy.next;
};

const list1 = {val: 1, next: { val: 2, next: { val: 4, next: null}}};
const list2 = { val: 1, next: { val: 3, next: { val: 4, next: null } } };
const output = mergeTwoLists(list1, list2);
console.log(output);