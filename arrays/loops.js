var a=[1,2,3,4,5,6,7,8,9,10]

//for loop
console.log('******************* for loop*************');
for(var i=0;i<a.length;i++){
    console.log("Index"+i+":",a[i]);
}

//in for each we will get first paramater is value
a.forEach(function(value,index){
    console.log(value,index);
})

var foreachloop=a.forEach(function(value,index){
})

console.log(foreachloop);

//using map loop-will return an new array
var maploop=a.map(function(a,b){
return [a]
})
console.log(maploop);


//for in --index

for(var name in a){
    console.log("Python way:",name);
}

//for of --value
for(var name of a){
    console.log("Python way:",name);
}

//index and name--- entries() method

for(var[index,value] of  a.entries()){
    console.log("python way in Js:"+"Index:"+index+"Value:"+value);

}