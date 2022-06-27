class Shape{
    
    draw(){
        return " I am generic";
    }
    
}

class Circle extends Shape{
    constructor(){
        super();
    }
    draw(){
       return  " I am a Circle";
    }

}
let Obj= new Circle();
console.log(Obj);
console.log(Obj.draw());