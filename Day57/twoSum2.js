var twoSum = function(nums, target) {
    const seen = new Map(); // Our "memory"

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (seen.has(complement)) {
            // Found it! Return the saved index and current index
            return [seen.get(complement), i] }

        // Otherwise, "remember" this number and where we found it
        seen.set(nums[i], i);
    }

    // console.log(seen);
    // console.log(indexes)
};

const nums = [2,7,15,11];
const target = 9;
const output = twoSum(nums, target);
console.log(output);