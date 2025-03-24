
// Callback function 
const greet = (msg, fun) => {
    console.log("hi...." + msg);
    fun();
};

greet("Good morning", () => { 
    console.log("My name is David"); 
});


const multTwo = (n) => n * 2;


const myArr = (callback, ...n) => {
    n.forEach((i) => console.log(callback(i))); 
};


myArr(multTwo, 4, 5, 6, 7, 8, 2);
