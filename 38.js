// object, function and this ---***

// object and function are  clear in mind 

// this is a variable which is pointing window object

// level -1

// we can access window object with the help of this keyword on global scope
// console.log(this);

// level -2

// we can access window object with the help of this keyword inside function means if we put this keyword inside function and  do console this then it is giving same window object. 

// function greet(){
//     console.log(this);
// }
// greet()

// level - 2.1

// we can create a global variable inside a function with the help of this keyword--

function creation (){
    this.newVariable = 'i am born'
}
creation() 
console.log(newVariable);


// level -3

// this variable give the same window object if we put this inside nested function.
function anotherGreet(){
    function child (){
        console.log(this);
    }
    return child()
}

anotherGreet()

// level - 4

// if we put primitive value inside object then it is become property and if we put function inside object then it is become method.--****####

// level -5

// create a method 

// in  below when this keyword is used inside a function and this function is also inside an object then this keyword is not pointing window object it is pointing the object in which it is sitting.


// const method = {
//     name : "amit",
//     age : 44,
//     log : function (){
//         console.log(this);
//     }
// }

// it is become a method.
// method.log()




// level -6 ----#####

// if go nested ( adding function inside object and adding another function inside this function) in the above method then this keyword is not pointing the object inwhich it is placed, it is pointing window object, it is a bug or i don't know why it is doing that.

//  so in order to make this keyword pointing to the object we pass this keyword into a varaible so this variable is pointing the address of this and we can do what ever we want with this variable b/c it is pointing the this keyword.

const anotherMethod = {
    name : 'this is anotherMethod name',
    age : 22,
    log : function (){
        console.log(this);
    }
}
