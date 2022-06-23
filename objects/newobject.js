var person=new Object()

//1st way to assign properties
person['firstname']='scott'
person['lastname']='Boss'
//2way to assign properties
var cityName="city"
person[cityName]="Boston"
console.log(person)
console.log(person["city"])
console.log(person["cityN"])
console.log(person[cityName])

//3rd way
person.email='dummy@gmail.com'
console.log(person)
console.log(person.email)

//4th way
Object.defineProperty(person,"age",{
    value:22,
    writable:true

})
console.log(person)
person.age=23
console.log(person)


person.address=new Object()
console.log(person)
person.address.state='A'
console.log(person.address.state)

