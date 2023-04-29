// array 
// it is a collection of anything

// we can pass a function in it and can invoke it.

const arr = ['amit',2,true,null , undefined, {firstName : 'Gita', age : 44}, function (name){var greeting = 'hi';console.log(greeting +' ' +  name);}]

// console.log(arr);

// i want to print hi Gita

arr[6](arr[5].firstName)

// we can create a new array with the help of new keyword

const arr1 = new Array()
console.log(arr1);

