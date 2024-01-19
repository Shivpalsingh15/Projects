var mainData= []
getData();
async function getData(){
    let data = await fetch("https://fakestoreapi.com/products");
     mainData = await data.json()
    console.log('mainData:', mainData)
    mapping(mainData)
}

function mapping(data){
    let container = document.getElementById('container')
    container.innerHTML = ''
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

        let rating = document.createElement('span')
        rating.innerText = `Products rating ${element.rating.rate}`;

        let price = document.createElement('p')
        price.innerText = `Price: ${element.price}`;
        price.style.fontWeight = "bold";


        let description = document.createElement('h4')
        description.innerText = `Products description ${element.description}`;

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
        mydiv.appendChild(rating)
        mydiv.appendChild(description);

        container.appendChild(mydiv)
    });
    
}

let category = document.getElementById("Category");
category.addEventListener("change", getCategory);



async function getCategory() {
let category = document.getElementById("Category");
console.log('category:', category.value)

let newData = mainData.filter((el)=> el.category == category.value)
mapping(newData);
// newData.sort((a, b) => a.price - b.price);
}
  
  
  let price = document.getElementById('Price')
  price.addEventListener("click", getPrice);


  async function getPrice() {
  let sortedData = [...mainData]; // Create a copy of the main data array
  sortedData.sort((a, b) => a.price - b.price); // Sort the array based on price in ascending order
  mapping(sortedData);
}
  

let Rating = document.getElementById("Rating");
Rating.addEventListener("click", getRating);


async function getRating(){
  let sortRating = [...mainData]
  sortRating.sort((a, b) => a.rating.rate - b.rating.rate);
  mapping(sortRating);


  // let rate = document.getElementById('Rating')
  // rate.addEventListener('click', )

  // async function getRate(){
  //   let sortRate = [...mainData]
  // }
}