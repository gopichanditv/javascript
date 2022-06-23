function one() {
    return function two() {
        return function three() {
            return "Four"
        }
        
    }
    
}
// var a=One()
//var b=a()
//var c=b()

//calling Inner functions
console.log(one())
console.log(one()())
console.log(one()()())

function getData() {
    var name="Hi"
    var city="boss"
    var getUser=function(){
        return name+city
    }
    // var user=getUser()
    // return user
    return getUser()
    
}
console.log(getData());