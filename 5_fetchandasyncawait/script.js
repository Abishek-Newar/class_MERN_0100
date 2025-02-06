fetch("https://ecommerce-mern-green.vercel.app/api/products/getallproducts")
.then((res)=>res.json())
.then((data)=>console.log(data.products))


//async await 
let products = []
async function serverCall(){
    const res = await fetch("https://ecommerce-mern-green.vercel.app/api/products/getallproducts")
    const data = await res.json()
    console.log("from async await",data.products)
    products= data.products
}

serverCall()


class Car{
    prices;
    constructor(prices){
        this.prices = prices
        console.log("car called")
    }
    price(){
        console.log("price called",this.prices)
    }
}



class Gtr extends Car{
    constructor(prices){
        super(prices)
        console.log("Gtr Called")
    }
    engine(){
        console.log("engine called")
    }
}

let c1 = new Gtr(3000)
c1.price()