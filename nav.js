let container = document.getElementById('container')
// container.addEventListener('change', getData)


async function getData(){
    let data = await fetch("https://fakestoreapi.com/products");
    let responce = await data.json()
    console.log('responce:', responce)
    mapping(responce)
}


async function mapping(data){
let container = document.getElementById("container");
// container.innerHTML = ''
data.forEach((element)=>{
    let mydiv = document.createElement('div')
    let title = document.createElement('p')
    title.innerText = element.title
    let price = document.createElement('p')
    price.innerText = element.price;

    let rate = document.createElement('p')
    rate.innerText = element.rating;

    mydiv.append(title, price, rate)
    container.append(mydiv)


})


}

getData()