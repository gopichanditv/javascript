/*
? spread operator(...) -unpacks elements of an array
? Rest operator(...) - packs elements into array
*/ 
//spread
const odd=[1,3,5];
const combined=[2,4,6,...odd]; //outside function
console.log(combined);

//Rest
function disp(a,b,c,...params) { //inside function
    console.log(params);
    
}
disp(1,2,3,4,5,6,7);


//construcitng array literals
let intialchars=['A',"B"];
let chars=[...intialchars,"C","D"]
console.log(chars);

//concatinate two array

let a=[1,2]
let all=[3,4]
let alln=[...a, ...all]; 
console.log(alln);

//copying an array

let scores=[80,90,100]
let copied=[...scores]
console.log(copied);

//spread operator and string
let charone=['A',...'BC','D'];   ///splits the string
console.log(charone);


let student={
    name:"scott"
}
let studnetInfo={
    ...student,
    subject:"Agile"
}
console.log(studnetInfo);