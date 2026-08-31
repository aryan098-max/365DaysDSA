function reverseString(str){

    let length = str.length;
    let halfLen = Math.floor(length/2);

    for(let i=0; i<halfLen; i++){

        let temp = str[i];
        str[i] = str[length-1-i];
        str[length-1-i] = temp;
    }

    return str;

}