var container = document.getElementById("container")
var con1 = document.getElementsByClassName("container")
console.log(con1[0].innerHTML)
var con2 = document.getElementsByTagName("div")
console.log(con2[0].innerHTML)
var con3 = document.querySelector(".container")
console.log(con3)

// container.innerHTML = "<div>hello this is mern class</div>"
console.log(container.innerText)
console.log(container.textContent)

container.style.color = "yellowgreen"

var box = document.createElement("div")
box.textContent = "hello there"

container.before(box)
// after append prepend

const cls = container.classList

container.classList.add("hello")
container.classList.remove("con1")
console.log(cls)

var atr = container.getAttribute("id")
container.setAttribute("name","hello")
console.log(atr)

const data = document.createElement("button")
data.innerText = "click me"
data.onclick = ()=>{
    alert("function called")
}
container.append(data)