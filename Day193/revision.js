// # 58. Length of Last Word

var lengthOfLastWord = function(s) {

     let i = s.length-1;

    while(i>=0){

        if(s[i] === " "){
            --i;
        }else{
            break;
        }
    }

    let count = 0;

    while(i>=0){

        if(s[i] !== " "){
            count++;
            --i;
        }else{
            break;
        }
    }
    
    return count;
    
};