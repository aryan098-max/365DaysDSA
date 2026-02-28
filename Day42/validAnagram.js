function isAnagram(s,t){

    return s.split("").sort().join("") === t.split("").sort().join("");

}

const s = "anagram";
const t = "nagaram";
const output = isAnagram(s,t);
console.log(output);