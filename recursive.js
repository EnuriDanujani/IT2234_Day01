//write a recursive function to print numbers from 1 to n

//arrow function


 
 const printNumbers = (n, current = 1) => {
    if (current > n) return;
    console.log(current);
    printNumbers(n, current + 1);
};

printNumbers(5); 
