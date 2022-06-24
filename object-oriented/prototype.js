//prototype is a special type of object associated with every object.

function Student(){
    this.name="Scott"
    this.gender="Male"

}
Student.prototype.city="Boston"
var stuobj1=new Student();
console.log(stuobj1);
var stuobj2=new Student();
console.log(stuobj2);
