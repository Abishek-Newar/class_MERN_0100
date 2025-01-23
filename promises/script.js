const p1 = new Promise((resolve,reject)=>{
    resolve("hello 1")
})

p1.then((msg)=>{
    console.log("resolved",msg)
}).catch((error)=>{
    console.log("rejected",error)
})
const p2 = new Promise((resolve,reject)=>{
    resolve("hello 2")
})
const p3 = new Promise((resolve,reject)=>{
    resolve("hello 3")
})

Promise.all([p1,p2,p3]).then((msg)=>{
        console.log("resolved",msg)
    }).catch((error)=>{
        console.log("rejected",error)
    })
    
fetch('https://dummyjson.com/products') 
.then((res)=>res.json())
.then((data)=>console.log(data))   

async function serverCall(){
    const res = await fetch('https://dummyjson.com/products')
    const data = await res.json()
    console.log("fucntion",data)
}
serverCall()