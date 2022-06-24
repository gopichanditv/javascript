

function Person(fname,lname){
    this.firstname=fname
    this.lastname=lname

}
Person.prototype.getFullName=function(){
    return this.firstname+" "+ this.lastname
}
function Student(age){
    this.age=age

}

//Inheritance
Student.prototype=new Person("Scott","Great")
Student.prototype.getAge=function(){
    return this.age

}
var studnet=new Student(46)

console.log(studnet);