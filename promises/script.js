const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("hello 1")
    },2000)
})
console.log(p1)
// p1.then((msg)=>{console.log("resolved",msg)}).catch((msg)=>{
//     console.log("rejected",msg)
// })


const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("hello 2")
    },2000)
})

const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("hello 3")
    },2000)
})

Promise.all([p1,p2,p3]).then((msg)=>{
    console.log(msg)
}).catch((msg)=>{
    console.log("rejected",msg)
})