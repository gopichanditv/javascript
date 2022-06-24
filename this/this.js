console.log(this)

function sample() {
    console.log(this);
}
sample()
//pass this to inner func
var obj={
    fname:"scott",
    getName:function(){
        var self=this;
        console.log(this);
        this.fname="HI"
        console.log(this);// points to the object
        var updateName=function(){
            this.fname="Bye"
            console.log(this); //points to global
            console.log(self); 

        }
        updateName()
    }
}
obj.getName()

//using Bind,call,apply for the function
var obj={
    fname:"scott",
    getName:function(){
        console.log(this);
        this.fname="HI"
        console.log(this);
        var updateName=function(){
            this.fname="Bye"
            console.log(this); 
        }
        //updateName.bind(this)()
        updateName.call(this)
        //updateName.apply(this)

    }
}
obj.getName()