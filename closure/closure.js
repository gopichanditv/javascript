function greetparent(msg){
    return function greetchild(name){
        return msg+" "+name
    }
}

var sayHello=greetparent("Hey")
console.log(sayHello);

var wishMe=sayHello("Scott")
console.log(wishMe);