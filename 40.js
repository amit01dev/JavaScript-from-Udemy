// arguments and spread operator---


// solve this question, what is the output
function greet (firstName, lastName,anotherName){
    console.log(firstName);
    console.log(lastName);
    console.log(anotherName);

}
greet()

// output -- 
// undefined
// undefined
// undefined

// b/c when function is invoke it's create it's own execution context and inside this three variables   are created  in memory creation phase (firstName, lastName,anotherName) and give undefined in it.


// argruments ----***

// argurments are special keyword which is reserved and it is giving all the value which is passed in function parameter.
// it is giving value in array-like format but it is not an array , it does not hold array property.

// we can access any parameter through indexing via argruments like console.log(argument[0]) - it will give parameter which is on 0th index.


// spread opeator -----***

function greet (firstName, lastName,anotherName, ...others){
    console.log(firstName);
    console.log(lastName);
    console.log(anotherName);

}
greet('amit','golu','bitu','gita','shayam')

// spread operator is used when we pass more value in function argument than function parameter is set , in this case all the extra value will be not used.

// so we use ... and a name ...others , with the help of this spread operator we can store all the extra value which is passed in function argument.
