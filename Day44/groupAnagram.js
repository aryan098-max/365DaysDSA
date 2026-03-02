function groupAnagrams(strs) {
    
    let map={}

    // creating sorted list
    for(let i=0; i<strs.length; i++){

        // sorting each value
        let sortedStr = strs[i].split("").sort().join("");

        // checking each value is present as a key or not
        if(!map[sortedStr]){
            // assigning the current key as one of the array values
            map[sortedStr] = [strs[i]];
        } else{
            // after checking value is anagram (key exists) push it on the
            // existing list
            map[sortedStr].push(strs[i]);
        }
    }
    console.log(Object.values(map));
    // Finally return all the values using Object.values(map)
    // We don't need spread operator because Object.values() returns an array
    return [...Object.values(map)];
};

const strs = ["eat","tea","tan","ate","nat","bat"];
const output = groupAnagrams(strs);
console.log(output);

const arr = [1, 2, 3];
console.log([...arr])