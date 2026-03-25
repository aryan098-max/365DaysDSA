var getIntersectionNode = function(headA, headB) {

    if(headA === null || headB === null){
        return null;
    }

    let pA = headA;
    let pB = headB;
    
    let set = new Set();

    while(pA !== null){
        set.add(pA);
        pA = pA.next;
    }

    while(pB !== null){
        
        if(set.has(pB)){
            return pB;
        }
        pB = pB.next;
    }
    return null;
};