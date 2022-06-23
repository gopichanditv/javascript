//using literal syntax

var person={
    id:1,
    name:"A",
    isAdmin:true,
    getName: function(){
        return this.name
    }
}
console.log(person.id);