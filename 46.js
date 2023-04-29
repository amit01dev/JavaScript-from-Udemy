// IIFE and safe code 

// (function(name){
//     var greeting = 'hi'
//     console.log(greeting + ' ' + name);   

// }('Amit'))


// we can't access greeting variable b/c it is in function scop and if we create the greeting variable in the 45.js file then it is accessible in this file and it is not colliding with this greeting variable.

// console.log(greeting);



// if we want that a varaible inside this function available to the glocal scope then we do attach to window object.

// (function(global, name){
//     global.greeting = 'hello from global'
//     var greeting = 'hi'
//     console.log(greeting + ' ' + name);   

// }(window,'Amit'))


// console.log(greeting);


