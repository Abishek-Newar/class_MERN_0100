var container = document.getElementById("container")

function add(){
    var value = document.getElementById("input").value
    const box = document.createElement("h1")
    box.textContent = value
    box.style.color= "yellowgreen"
    container.append(box)
}

function removeall(){
    window.location.reload()
}