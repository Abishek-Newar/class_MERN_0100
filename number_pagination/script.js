var data = []
var currentPage = 1

var container = document.getElementById("container")
var numberContainer = document.getElementById("numberContainer")


async function serverCall(){
    const response = await fetch('https://dummyjson.com/products')
    const res = await response.json()
    data = await  res.products

    const totalPages = Math.ceil(data.length/10)

    const dummyArray = new Array(totalPages).fill(0)
    //dummyArray = [0,0,0]

    dummyArray.forEach((_,index)=>{
        const numberBox = document.createElement("div")
        numberBox.textContent = index+1
        numberBox.classList.add("numberBox")
        numberContainer.append(numberBox)
    })


    var tempContainer = document.createElement("div")
    data.forEach((element,index)=>{
        if(index>=((currentPage-1)*10) && index<(currentPage*10)){
            let box = document.createElement("div")
        let title = document.createElement("h1")
        let price = document.createElement("p")
        let image = document.createElement("img")
        image.src = element.thumbnail
        title.innerText = element.title
        price.innerText = element.price
        box.append(image)
        box.append(title)
        box.append(price)
        box.classList.add("box")
        tempContainer.append(box)
        }
    })
    container.innerHTML = tempContainer.innerHTML
}
serverCall()


function increament(){

}

function decrement(){

}

function pageSwitch(){

}