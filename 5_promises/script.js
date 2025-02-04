const P1 = new Promise((resolve,reject)=>{
    reject("hello there 1")
})

P1.then((msg)=>{
    console.log("resolved",msg)
}).catch((msg)=>{
    console.log("rejected",msg)
})

const P2 = new Promise((resolve,reject)=>{
    resolve("hello there 2")
})
const P3 = new Promise((resolve,reject)=>{
    resolve("hello there 3")
})

Promise.all([P1,P2,P3]).then((msg)=>{
        console.log("resolved",msg)
    }).catch((msg)=>{
        console.log("rejected",msg)
    })