class Car{
    a
    constructor(a){
        this.a = a
        console.log("constructor called")   
    }
    engine(){
        console.log("engne called",this.a)
    }
}

var C = new Car("hello")
C.engine()