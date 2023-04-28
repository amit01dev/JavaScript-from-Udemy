// object and function -----*****

// we can create a object with the help of new Object() but it is not recommandate.
let person = new Object()

// we can add properties in this object with . notation(member access operator)
person.firstName = 'amit'
person.lastName = 'Rajpurohit'

// we can add properties in this object with [] notation ( computed member access operator)
person['age'] = 22;
person['live'] = 'bikaner'

// console.log(person);

// we can add another object in this object 
person.newObject = new Object()

// adding properties in this new object
person.newObject.firstName = 'Gita'
person.newObject.lastName = 'suthar'


// console.log(person);

// accessing child object properties 
console.log(person.newObject.firstName);
console.log(person.newObject['lastName']);



