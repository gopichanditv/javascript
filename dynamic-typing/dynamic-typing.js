var a=10
a='scott'
a=true
a=null
a=10.1
a=undefined
a={}
a=function(){} //function can be assigned to variable
a=[]
console.log(a, typeof a)
var b={}
/*
 ? Array.isarray method to findout because array and object are type of object
*/

console.log(typeof a == typeof b )
console.log(Array.isArray(a))
console.log(Array.isArray(b))