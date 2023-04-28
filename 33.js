// faking Namespace ---
// namespace is a container for variable and function so that they don't colide in the case of the same name.

//  in below both can't be printed only last one is printed 
var person = "amit"
var person = "Mohan"

console.log(person);


// in order to print both which have same name we pack these in different objects


var object1 = {}
var object2 = {}

object1.person1 = "amit1"
object2.person2 = 'Mohan2'

console.log(object1);
console.log(object2);


