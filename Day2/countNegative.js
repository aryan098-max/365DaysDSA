/** 
 * How to do it?
 * Is interger negative or positive how did we used to find it out?
 * Side By Side Comparison - Not Possible
 * How is it possible then?
 * How can I do it
 * I can do it by comparing with 0
 */

function countNegative(arr1){

    let countNegativeNumber = 0;

    for(let i=0; i<arr1.length; i++){

        if(arr[i] < 0){
            countNegativeNumber++;
        }
    }

    return countNegativeNumber;
}

const arr = [1, -2, -3, 4, 5, -6, 7, -8, 9];
const count = countNegative(arr);
console.log(count);