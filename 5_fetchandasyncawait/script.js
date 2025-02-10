// fetch("https://ecommerce-mern-green.vercel.app/api/products/getallproducts")
// .then((res)=>res.json())
// .then((data)=>console.log(data.products))

// const p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("reolved in 3000")
//     },3000)
// })
// console.log(p1)
// p1.then((msg)=>{
//     console.log(msg)
// })

//async await 
let products = []
async function serverCall(){
    const res = await fetch("https://ecommerce-mern-green.vercel.app/api/products/getallproducts")
    const data = await res.json()
    console.log("from async await",data.products)
    products= data.products

    var container = document.getElementById("container")
    let idx = 4
    products.forEach((element,index) => {
        if(index<idx){
            var title = document.createElement("h1")
        var description = document.createElement("p")
        var image = document.createElement("img")
        var box = document.createElement("div")
        title.textContent = element.title 
        description.textContent = element.description
        image.src = element.image 
        box.append(image)
        box.append(title)
        box.append(description)
        box.classList.add("box")
        container.append(box)
        }
    
    });


}

serverCall()


// class Car{
//     prices;
//     constructor(prices){
//         this.prices = prices
//         console.log("car called")
//     }
//     price(){
//         console.log("price called",this.prices)
//     }
// }



// class Gtr extends Car{
//     constructor(prices){
//         super(prices)
//         console.log("Gtr Called")
//     }
//     engine(){
//         console.log("engine called")
//     }
// }

// let c1 = new Gtr(3000)
// c1.price()