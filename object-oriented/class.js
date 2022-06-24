//class
function Student(){

}

function Person(){

}

var person1=new Person() //person1 is an instance
var person1=new Person() //person2 is an instance


//constructor

function Order(){
    console.log("Order is initiated");

}

var order1=new Order() // Order() is constructor

//properties

function Customer(gender){
    this.gender=gender //this.gender is a property
}

var customer1=new Customer("male");
var customer2=new Customer("Female");
console.log(customer1.gender)
console.log(customer2.gender)