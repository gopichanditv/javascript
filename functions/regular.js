// function sample(){
//     // return 1
//     // return 'scot'
//     // return true
//     // return null
//     // return undefined never intentionally return undefined
//     // return {}
//     // return function(){}
//     // return  // same as not returning

// }
// sample() //invoking
// console.log(sample())


/*
? pass parameters and overriding is possible
*/

function getname(a){
    return "scott"+" "+a
}

function getname(a,b){
    return "Second func"+"scott"+" "+a+b
}
function getname(){
    
}
console.log(getname("Bye"))
console.log(getname("Hi","Bye"));
console.log(getname())