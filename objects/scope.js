var person={
    firstname:"scott",
    lastname:"HI",
    age:22
}

person.email="a@gmail.com" //create
person.firstname="Great" //update
delete person.age //delete
console.log(person);


var studnet={
    firstname:"scott",
    lastname:"HI",
    age:22
}
var studnet1={
    firstname:"scott",
    lastname:"HI",
    age:22
}
var studnet2={
    firstname:"scott",
    lastname:"HI",
    age:22
}

/*
? object.preventExtensions

? cannot add new properties,update and delete can be
*/

Object.preventExtensions(studnet)
studnet.email="a@gmail.com" //create
studnet.firstname="Great" //update
delete studnet.age //delete
console.log(studnet);

/*
? object.seal

? cannot add new, delete properties
? can update
*/

Object.seal(studnet1)
studnet1.email="a@gmail.com" //create
studnet1.firstname="Great" //update
delete studnet1.age //delete
console.log(studnet1);

/*
? object.freeze , cannot freeze inner object
?cannot upadte,add,delete

*/
Object.freeze(studnet2)
studnet2.email="a@gmail.com" //create
studnet2.firstname="Great" //update
delete studnet2.age //delete
console.log(studnet2);



