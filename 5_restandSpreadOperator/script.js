//spread
function sum(a,b,c,d){
    console.log(a,b,c,d)
}

var arr = [1,2,3,4]
console.log(arr)
sum(...arr)

//rest
function sums(...ars){
    console.log(ars)
}

sums(32,45,32,1,2,3,4)

//rest and spread

function sumss(a,b,...c){
    console.log(a,b,c)
}
var arrs = [32,3,2,4,1,6]
sumss(...arrs)


//destructing array

var arr1 = [32,3,2,45,31]

var [a,b,...c] = arr1
console.log(c)

//desctructing object

var obj = {
    name: "Abishek",
    age: 22,
    class: "MERN"
}

var {name,age,classs} = obj 
console.log(name)