// closure -- 

function parent(){
    let a = 10;
    function child(){
        console.log(a += 1);
    }
    return child;
}

console.log(parent()); 

const childFunction = parent()
childFunction()  // now it hold value of a = 11 in memory. if we again call this function it is not  
                    // taking from a= 10, it is taking from a = 11

childFunction()


// const myFunction = () => {
//     let myValue = 2;
//     console.log(myValue);

//     const childFunction = () => {
//          console.log(myValue += 1);
//     }

//     return childFunction;
// }

// const result = myFunction();
// console.log(result);
// result();
// result();
// result();
