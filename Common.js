const a = [4, 5, 6, 3, 7];
const b = [8, 3, 2, 1, 5];

const commonElements = a.filter(element => b.includes(element));

console.log(commonElements);
