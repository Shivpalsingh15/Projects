var mainData = [];

let category = document.getElementById("Category");
category.addEventListener("change", getCategory);

let rating = document.getElementById("Rating");
rating.addEventListener("change", getRate);

let price = document.getElementById("Price");
price.addEventListener("change", getPrice);

getData(category.value, price.value, rating.value);

async function getData(category, price, rating) {
 
  let data = await fetch("https://fakestoreapi.com/products");
  mainData = await data.json();
  console.log("mainData:", mainData);
  let finalfilteredarr = []
   if ((category, price, rating)) {
   }
  mapping(mainData);
}

function mapping(data) {
  let container = document.getElementById("container");
  container.innerHTML = "";
  // bhai waha class use kiya hai tune id se get kr rh hai islye
  data.forEach((element) => {
    let mydiv = document.createElement("div");
    let title = document.createElement("p");
    // title.setAttribute("id", "merap");
    title.innerText = `Title: ${element.title}`;
    // title.style.fontWeight = 'bold'
    // title.style.color = 'grey'
    title.style.border = "2px solid grey";
    title.style.backgroundColor = "black";
    title.style.padding = "5px";
    title.style.border = "2px solid white";

    let image = document.createElement("img");
    image.src = element.image;

    let rating = document.createElement("span");
    rating.innerText = `Products rating ${element.rating.rate}`;

    let price = document.createElement("p");
    price.innerText = `Price: ${element.price}`;
    price.style.fontWeight = "bold";

    let description = document.createElement("h4");
    description.innerText = `Products description ${element.description}`;

    price.addEventListener("mouseover", () => {
      price.style.fontSize = "20px";
    });

    // Reset font size on mouseout
    price.addEventListener("mouseout", () => {
      price.style.fontSize = ""; // Set to an empty string to revert to the default size
    });
    // react  onChange onClick   click chnage
    // mydiv.appendChild(title);
    // mydiv.appendChild(image);
    // mydiv.appendChild(price);
    // mydiv.appendChild(rating);
    // mydiv.appendChild(description);
    mydiv.append(title, image, price, rating, description);

    container.appendChild(mydiv);
  });
}

async function getCategory() {
  getData(category.value, price.value, rating.value);
  // let category = document.getElementById("Category");
  // // console.log("category:", category.value);
  // if (category.value) {
  //   console.log(true);
  //   let newData = mainData.filter((el) => el.category == category.value);

  //   mapping(newData);
  //   // mapping(sortedData);

  // } else {
  //   mapping(mainData);
  // }
  // newData.sort((a, b) => a.price - b.price);
}

async function getPrice() {
  getData(category.value, price.value, rating.value);

  // if(price.value == 'LH'){
  //   let sortedData = [...mainData]; // Create a copy of the main data array
  //   sortedData.sort((a, b) => a.price - b.price); // Sort the array based on price in ascending order
  //   mapping(sortedData);
  // }else if(price.value == 'HL'){
  //    let sortedData = [...mainData]; // Create a copy of the main data array
  //   sortedData.sort((a, b) => b.price - a.price); // Sort the array based on price in ascending order
  //   mapping(sortedData);
  // }else{
  //   mapping(mainData);

  // }
}

async function getRate() {
  getData(category.value, price.value, rating.value);
  // if(Rating.value=='LH'){
  //   let sortData =[...mainData]
  //       sortData.sort((a, b) => {
  //         return a.rating.rate - b.rating.rate;
  //       });
  //       console.log(sortData);
  //   mapping(sortData);

  // }else if(Rating.value=='HL'){
  //   let sortData = [...mainData];
  //   sortData.sort((a, b) => {
  //     return b.rating.rate - a.rating.rate;
  //   });
  //   mapping(sortData);

  // }else{
  //   mapping(mainData)
  // }
}

// let Rating = document.getElementById("Rating");
// Rating.addEventListener("click", getRating);

// async function getRating() {
//   let sortRating = [...mainData];
//   sortRating.sort((a, b) => a.rating.rate - b.rating.rate);
//   mapping(sortRating);

// let rate = document.getElementById('Rating')
// rate.addEventListener('click', )

// async function getRate(){
//   let sortRate = [...mainData]
// }
// }
