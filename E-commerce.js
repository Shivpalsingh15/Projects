getData();
async function getData(){
    let data = await fetch("https://fakestoreapi.com/products");
    let responce = await data.json()
    console.log('responce:', responce)
    mapping(responce)
}

function mapping(data){
    let container = document.getElementById('container')
    // bhai waha class use kiya hai tune id se get kr rh hai islye 
    data.forEach(element => {
        
        let mydiv = document.createElement('div')
        let title = document.createElement('p')
        title.innerText = `Title: ${element.title}`;
        title.style.fontWeight = 'bold'
        title.style.color = 'grey'
        title.style.border = '2px solid grey'
        title.style.backgroundColor = 'black'
        title.style.padding = '5px'
        title.style.border = '2px solid white'

        let image = document.createElement('img')
        image.src = element.image

        let price = document.createElement('p')
        price.innerText = `Price: ${element.price}`;
        price.style.fontWeight = "bold";

         price.addEventListener("mouseover", () => {
           price.style.fontSize = "20px";
         });

         // Reset font size on mouseout
         price.addEventListener("mouseout", () => {
           price.style.fontSize = ""; // Set to an empty string to revert to the default size
         });


        mydiv.appendChild(title)
        mydiv.appendChild(image)
        mydiv.appendChild(price)

        container.appendChild(mydiv)
    });
    
}