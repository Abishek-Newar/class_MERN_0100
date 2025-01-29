var container = document.getElementById("container")
var con1 = document.getElementsByClassName("container")
console.log(con1[1].innerHTML)
var con2 = document.getElementsByTagName("div")
console.log(con2[0].innerHTML)
var con3 = document.querySelector(".container")
console.log(con3)

// container.innerHTML = "<div>hello this is mern class</div>"
console.log(container.innerText)
console.log(container.textContent)

container.style.color = "yellowgreen"