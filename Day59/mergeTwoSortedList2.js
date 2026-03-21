function ListNode(val, next){

    this.val = (!val ? 0: val);
    this.next = (!next ? null: next);
}

var mergeTwoLists = function(list1, list2) {
    
  
};

const list1 = {val: 1, next: { val: 2, next: { val: 4, next: null}}};
const list2 = { val: 1, next: { val: 3, next: { val: 4, next: null } } };
const output = mergeTwoLists(list1, list2);
console.log(output);