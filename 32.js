// object literals ---
// it is a part of object and it is created using {}

 var Amit = {
    firstName : 'Amit',
    lastName : 'Rajpurohit',
    address : {
        city : 'Bikaner',
        state : 'Rajasthan'

    }
}


// we can pass object inside a function 
function greet(person){
    console.log(`hi ${person.firstName}`);


}
greet(Amit)

// we can pass an object in the function when calling the function  on the fly 
greet({
    firstName : 'Mohan',
lastName: 'Singh'
}
)

