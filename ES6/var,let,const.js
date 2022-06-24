// function sample(){
//     //var foo="blue";
//     console.log(foo);
//     if(true){
//         var foo="blue";

//         console.log(foo);
//     }
// }
// sample()
// console.log(foo); //not defined


//let

// function display(){
//     if(true){
//         var foo="Hello"
//         let bar="How are you" //block scoped
//         const baz="I am Fine" //block scoped
//         console.log(foo)
//         console.log(bar);
//         console.log(baz);
//     }
//     console.log(foo)
//     console.log(bar);
//     console.log(baz);
// }
// display()

// for(var i=0;i<3;i++){
//     console.log(i);
// }
// console.log(i);

// for(let i=0;i<3;i++){
//     console.log(i);
// }
// console.log(i);


// function test() {
//  let foo=1;
//  let foo=200; //block scoped variables can not be re declared
    
// }

// function test(){
//     const a=10; //must be initalized
//     a=200; //cannot be reassigned and redclare
//     console.log(a)
// }
// test()

//constant controls object data types
const a=[1,2,3,4,5]
a.push(6)
console.log(a);

