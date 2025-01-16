function move() {
    var random = Math.random()
    document.getElementById("header").innerText = random
}
var container = document.getElementById("container")
container.addEventListener("click",move)

function remove(){
    container.removeEventListener("click",move)
}


//Math 
//random
//floor
//round