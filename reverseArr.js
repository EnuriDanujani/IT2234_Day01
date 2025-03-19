function reverseArray(arr) {
    let reversed = [];
    while (arr.length > 0) {
        reversed.push(arr.pop());
    }
    return reversed;
}

let arr = ['a', 'b', 'c', 'd'];
let reversedArr = reverseArray(arr);
console.log(reversedArr); // Output: ['d', 'c', 'b', 'a']
