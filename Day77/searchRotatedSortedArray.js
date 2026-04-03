/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(arr, target) {

    let left = 0;
    let right = arr.length-1;

    while(left <= right){

        let middle = left + Math.floor((right-left)/2);

        if(target === arr[middle]){
            return middle;
        }

        if(arr[middle] >= arr[left]){

            if(target < arr[middle] && target >= arr[left]){

                right = middle - 1;
            }
            else {
                left = middle + 1;
            }
        }
        else {

            if(target > arr[middle] && target <= arr[right]){

                left = middle + 1;
            } 
            else {
                right = middle - 1;
            }
        }
    }

    return -1;

};