class Car{
    constructor(){
        console.log("car constructor called")
    }
    engine(){
        console.log("engine called")
    }
}

class Suzuki extends Car{
    constructor(){
        super()
        console.log("suzuki constructor called")
    }
    price(){
        console.log("price called")
    }
}

class BMW extends Suzuki{
    constructor(){
        super()
        console.log("BMW constructor called")
    }
    wheels(){
        console.log("wheels Called")
    }
}

var B = new BMW()

