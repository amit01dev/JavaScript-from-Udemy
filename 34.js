var person = {
    first : 'amit',
    last : 'kumar',
    age : 44
}

// converting  object literal into JSON 
console.log(JSON.stringify(person));

// converting JSON into object literal
var converting = JSON.parse('{"firstName": "amit", "secondName" : "kumar"}')
console.log(converting);


