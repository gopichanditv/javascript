/*
* polymorphism -function existing in several forms

? function overloading -same function with different number of parameters and different number of parameters
! function overloading -Not possible in JS
? function overriding  -same function with different behavior
*/
// function mutiply(x,y,z) {
//     return x*y*z;
  
// }
// console.log(mutiply(2,3,4))

// function mutiply(x,y,z) {
//     return x*y*z;
  
// }

function multiply(x) {
    return function(y){
        return function(z)
{
    return x*y*z
}    }
    
}
console.log(multiply(2)(3)(4))

a=[1,2,3,4]
console.log(a.length=0);
