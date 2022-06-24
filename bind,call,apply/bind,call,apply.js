var a={fname:"scott",lname:"Hi"}
var b={fname:"M",lname:"Hi"}
var c={fname:"C",lname:"Hi"}

function display(val,val1){
    console.log(this);
    return this.fname+" "+this. lname+" "+val+" "+val1
}
//display()

//  var dispbind=display.bind(a)

//  console.log( dispbind());

//display.bind(a)()

var dispbind=display.bind(a,"A","B")
console.log( dispbind());

var dispbindcall=display.call(a,"A","B")
console.log( dispbindcall);

var dispbindapply=display.apply(a,["A","B"])
console.log( dispbindapply);


//bind for ananymous function
var hello=function(){
    console.log(this);

}.bind()
