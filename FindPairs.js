function findPairs(arr, target) {
    const pairs = [];
    const seen = new Set();

    for (const num of arr) {
        const complement = target - num;
        if (seen.has(complement)) {
            pairs.push([complement, num]);
        }
        seen.add(num);
    }

    return pairs;
}

const arr = [1, 2, 3, 4, 5, 6];
const target = 7;
console.log(findPairs(arr, target));
