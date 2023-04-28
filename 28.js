// Existence and boolens

// in the above it is just a fasy word , i am explaining you in a very simple words in below --------

var a;

// suppose here a program which go the the web and get some value which is placed in the a variable.


// if(a) {
//     console.log('something is there');
// }


// in the above code whatever is in the if () it is converting into boolean value and then processed.



// 1.   in the above case a is undefined and it is converting undefined into false so it it not priting anything.

// if a = null, '', 0 false then it is not priting it 


// another example --------

 if(a || a===undefined){
    console.log('something is there');
}

// here in above code  from these two operators  || and === which one has higher precedence and the answer is === , === having higher precedence so it is excuted first.

// (a || true)
// (false || true)
// it give true 

// so in the above code it is priting something is there.


