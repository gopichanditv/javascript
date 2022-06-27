var employee={
    id:1,
    greet:function(){
        console.log(this.id);
    }
}
employee.greet()

var employee={
    id:1,
    greet:function(){
        setTimeout(function() {
            console.log(this.id);
        },2000);
      
    }
}
employee.greet()

var employee={
    id:1,
    greet:function(){
        setTimeout(function() {
            console.log(this.id);
        }.bind(this),2000);
      
    }
}
employee.greet()

var employee={
    id:1,
    greet:function(){
        setTimeout(()=> {
            console.log(this.id);
        },2000);
      
    }
}
employee.greet()

