/*

? => fat arrow

*/

// var add=function(a,b){
//     return a+b
// }
// console.log(add(10,20))

// var add=(a,b)=>{
//     return a+b
// }
// console.log(add(10,20))



// var add=(a,b)=> a+b ;//for a single line return 
// console.log(add(10,20));


// var add=()=> ({name:"Hi"}) ;//for a single line return 
// console.log(add());


let numbers=[4,2,6]
// numbers.sort(function(a,b) {
//     return a+b
// })

// numbers.sort((a,b)=>a+b)
// console.log(numbers);

let names=["scott","Adam","Tuan"]
let lengths=names.map(name=> name.length)
console.log(lengths);


let multiply=(x,y)=>  //break the line this way
x*y;

//object literal

// let setColor=function(color){
//     return {value:color}
// }
// let backgroundcolor=setColor("grenn")
// console.log(backgroundcolor);

let setColor=(color)=>({value:color})
let backgroundcolor=setColor("grenn")
console.log(backgroundcolor);
