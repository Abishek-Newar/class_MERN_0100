let data = []
async function serverCall() {
    const response = await fetch('https://dummyjson.com/products')
    const res = await response.json()
    data = res.products
    console.log(data)
    data.forEach(element => {
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
        container.append(box)
    });
}
serverCall()

var container = document.getElementById("container")

