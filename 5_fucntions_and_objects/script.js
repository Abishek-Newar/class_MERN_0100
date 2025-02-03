var student = {
    name: "abishek",
    class: "MERN",
    age: 22
}
console.log(student)
console.log(student.name)

student.class = "javascript"
console.log(student)

let studentArr = [
    {
        name: "abishek",
        class: "MERN",
        age: 22
    },{
        name: "ajay",
        class: "MERN",
        age: 22
    },{
        name: "abi",
        class: "MERN",
        age: 22
    }
]

console.log(studentArr[0].name)

function fucn_name(){
    console.log("hello")
}

fucn_name()

function sum(a,b){
    console.log(a+b)
}

sum(10,30)

const arrow_func = ()=>{
    console.log("hii")
}

arrow_func()

var str = `value of ${student.name}`
console.log(str)

