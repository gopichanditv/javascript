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



var add=(a,b)=> a+b ;//for a single line return 
console.log(add(10,20));


var add=()=> ({name:"Hi"}) ;//for a single line return 
console.log(add());
