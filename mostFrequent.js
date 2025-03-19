function mostFrequentElement(arr) {
    const freqMap = new Map();
    let maxFreq = 0;
    let mostFrequent = null;

    for (const num of arr) {
        const count = (freqMap.get(num) || 0) + 1;
        freqMap.set(num, count);

        if (count > maxFreq) {
            maxFreq = count;
            mostFrequent = num;
        }
    }

    return mostFrequent;
}

const arr = [4, 8, 3, 4, 3, 2, 1, 8, 4];
console.log(mostFrequentElement(arr));
