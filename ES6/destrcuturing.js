//Array destructuring

// let array=["Scott","Adam","Tuan"];

// let [name1,name2,name3]=array;
// console.log(name1); //array[0]
// console.log(name2); //array[1]
// console.log(name3); //array[2]

// let [fname,lname]="Scott Deastnick".split( " ");
// console.log(fname);
// console.log(lname);


// let [fname, ,lname]="Scott HI Deastnick".split( " ");
// console.log(fname);
// console.log(lname);

let user={
    name:"scott",
    age:45
}
let {name,age}=user //same keys to be used
console.log(name);
console.log(age);