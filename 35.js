// functions are objects----


// from akshey saini youtube video ---

// important jarguns releated to function

// 1. function statement aka function declaration

// function greet(){
//     console.log('hi we are greeting you');

// }

// 2. function expression 
// var happy = function (){
//     console.log('different ways to be happy in life');
// }


// important ---*****

var sad = function xyz(){
    // console.log('i am representing the sad');
    console.log(xyz);
}

// sad()
// xyz()


// xyz() --- it will give reference error b/c it xyz is a variable and  is not in the global scope it is in the sad function scope and it is only accessible inside the sad function.



// important ----*** 
// difference b/t function statement and function expression

// A. function statement decleare directly but function expression declare in a variable.

// B. hoisting is possible in function declaration but it is not possible in function expression b/c in function expression function is pack inside a variable and in memory creation phase in execution context variable created and undefined is send inside this variable.



// 3.   anonymous function 

// function (){
//     console.log('i am incorrect format ');
// }

//***  why we use anonymous function what is the use of this function 
// use --- we can pass this anonymous function as a value ( inside a variable or anywhere )
// this above code is invaild we have to put inside anything like variable etc.
// correct is below.

let anonymousFunction = function (){
    console.log('i am correct format ');
}

// end of content form akshey saini video

