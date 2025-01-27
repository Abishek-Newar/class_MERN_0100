let data = []
var items = 10
var container = document.getElementById("container")

async function serverCall() {
    //data fetching
    const response = await fetch('https://dummyjson.com/products')
    const res = await response.json()
    data = res.products
    console.log(data)
    //creating a dummy element to replace all the values in container so that it doesn't get added twice
    let tempContainer = document.createElement("div")

    //for each to iterate all the values in data
    data.forEach((element,index) => {
        //condition for which one to display on screen
        if(index<items){
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
        
        
    });
    console.log(tempContainer.innerHTML)
    //repalcing the values of container 
    container.innerHTML = tempContainer.innerHTML

    //if all the items are dispalyed on screen then disable the load more button
    if(items>=data.length){
        document.getElementById("load").disabled = true
    }
}
//calling the fucntion
serverCall()

//fucntion so that the items variables can be inreased and simultaneously the number od items diaplayed on screen
async function LoadMore(){
    if(items<data.length){
        items+=10
        serverCall()
    }
}




