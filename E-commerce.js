var mainData = [];

let category = document.getElementById("Category");
category.addEventListener("change", getCategory);

let sort = document.getElementById("Sorting");
sort.addEventListener("change", getSorted);

getData(category.value, sort.value);
async function getData(category, sorting) {
  let data = await fetch("https://fakestoreapi.com/products");
  mainData = await data.json();
  console.log("mainData:", mainData);
  if (category && sorting) {
    //filter the data acooring to both parameters
    console.log(category);
    console.log(sorting);
    let filterarr = mainData.filter((el) => el.category == category);

    console.log("filterarr:", filterarr);
    if (sorting == "LHR") {
      filterarr.sort((a, b) => a.rating.rate - b.rating.rate);
      mapping(filterarr)
    } else if (sorting == "HLR") {
      filterarr.sort((a, b) => b.rating.rate - a.rating.rate);
      mapping(filterarr);
    } else if (sorting == "HLP") {
      filterarr.sort((a, b) => b.price - a.price);
      mapping(filterarr);
    } else if (sorting == "LHP") {
      filterarr.sort((a, b) => a.price - b.price);
      mapping(filterarr);
    }

  } else if (category) {
    let filterarr = mainData.filter((el) => el.category == category);
    
      mapping(filterarr);

    // filter main data acording to slected caetgory
    console.log("only category", category);
  } else if (sorting) {
    let filterarr = [...mainData]
    
     if (sorting == "LHR") {
       filterarr.sort((a, b) => a.rating.rate - b.rating.rate);
       mapping(filterarr);
     } else if (sorting == "HLR") {
       filterarr.sort((a, b) => b.rating.rate - a.rating.rate);
       mapping(filterarr);
     } else if (sorting == "HLP") {
       filterarr.sort((a, b) => b.price - a.price);
       mapping(filterarr);
     } else if (sorting == "LHP") {
       filterarr.sort((a, b) => a.price - b.price);
       mapping(filterarr);
     }
    
    // fitler main data accoring to selected sorted parameter
    console.log("only sorting", sorting);
  } else {
    mapping(mainData);
    console.log("kuch bhi nhi ", sorting, category);
  }
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

function getCategory() {
  getData(category.value, sort.value);
}

function getSorted() {
  getData(category.value, sort.value);
}

/**
 * main fucntion  pura dta aur mapped UI p
 * 2 catwgory and sorting
 *
 * u
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */
