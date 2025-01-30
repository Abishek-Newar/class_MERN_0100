var container = document.getElementById("container")
function events(){
    document.getElementById("text").innerText = Math.random()
}
container.addEventListener('mousemove',events)

function remove(){
    container.removeEventListener('mousemove',events)
}


setTimeout(()=>{
    console.log("hello")
},2000)

let count = 0
const interval = setInterval(()=>{
    count +=1
    console.log(count)
    if(count === 10){
        clearInterval(interval)
    }
},3000)