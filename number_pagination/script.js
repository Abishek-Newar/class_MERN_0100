var data = []
var currentPage = 1
var totalPages;
var container = document.getElementById("container")
var numberContainer = document.getElementById("numberContainer")


async function serverCall(){
    const response = await fetch('https://dummyjson.com/products')
    const res = await response.json()
    data = await  res.products


    //data.length = 24
    //21/10 = 2.1 = 3 ->Math.ceil
    totalPages = Math.ceil(data.length/10)
    console.log(totalPages)
    const dummyArray = new Array(totalPages).fill(0)
    //dummyArray = [0,0,0]
    const dummyContainer = document.createElement("div")
    dummyArray.forEach((_,index)=>{
        const numberBox = document.createElement("div")
        numberBox.textContent = index+1
        numberBox.classList.add("numberBox")
        numberBox.onclick = ()=>{currentPage = index+1;serverCall()}
        dummyContainer.append(numberBox)

    })
    numberContainer.innerHTML = ""
    dummyContainer.style.display = "flex"
    dummyContainer.style.gap= "10px"
    numberContainer.appendChild(dummyContainer)
    


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
    console.log("inc")
    if(currentPage<totalPages){
        currentPage +=1
        serverCall()
    }
}

function decrement(){
    if(currentPage>1){
        currentPage -=1
        serverCall()
    }
}