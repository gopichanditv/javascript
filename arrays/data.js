var data=[1,"scott",true,null,undefined,{name:"scott"},function(name){
    return name
},["a","b","c"]

]
var m=data[6](data[5].name+"Likes"+data[7][2])
console.log(m);