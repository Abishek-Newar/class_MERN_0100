setTimeout(()=>{
    console.log(10)
},3000)


const interval = setInterval(()=>{
    console.log(30)
},2000)

setTimeout(()=>{
    clearInterval(interval)
},12000)

var a = 10
var b = `abc = ${a}`
console.log(b)


var arr = [1,2,3,4]

function abc(a,b,...ar){
    console.log(b)
    console.log(ar)
}
abc(...arr)

function ab(...ar){
    console.log(ar)
}
ab(1,2,3,4,1,2)


var obj = {
    name: "Abishek",
    subj: "MERN",
    age: 22
}

var bc = {
    ...obj,
    age: 20
}
console.log(bc)