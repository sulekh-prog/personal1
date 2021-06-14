const ulEl = document.createElement("ul");
// const liEl = document.createElement("li");...theses codes for one pics now make a function and pass three parameters
// ulEl.appendChild(liEl);

// const imgEl = document.createElement("img");
// imgEl.setAttribute("src", "images/apple-pie .jpg");
// liEl.appendChild(imgEl);
// console.log(liEl);

// const h2El = document.createElement("h2");
// h2El.textContent = "Easy Food Recipe";
// liEl.appendChild(h2El);

// const pEl = document.createElement("p");
// pEl.textContent = "All about healthy food";
// liEl.appendChild(pEl);
// console.log(ulEl);

// console.log(document.querySelector("#app"));
const getFoodDetails = ({ image, name, description }) => {
  const liEl = document.createElement("li");

  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", image);
  console.log(image);
  liEl.appendChild(imgEl);

  const h2El = document.createElement("h2");
  h2El.textContent = name;
  liEl.appendChild(h2El);

  const pEl = document.createElement("p");
  pEl.textContent = description;
  liEl.appendChild(pEl);

  return liEl;
  // liEl.appendChild(ulEL); //OVER HERE APPENDING WHEN PASSING THE ARGUMENTS//
};
// liEl.appendChild(ulEl);
const recipes = [
  {
    image: "images/apple-pie.jpg",
    name: "Easy Food Recipe",
    description: "All about healthy food",
  },
  {
    image: "images/breakfast.jpg",
    name: "Easy Breakfast",
    description: "5-Minutes Recipe",
  },
  {
    image: "images/indian-mutton.jpg",
    name: "Traditional Recipe",
    description: "very delicious and succlent",
  },
];

for (let recipe of recipes) {
  let objDetails = getFoodDetails(recipe);
  ulEl.appendChild(objDetails);
}

const appEl = document.querySelector("#app");
appEl.appendChild(ulEl);

//using two images , name and description from the folder src/images/apple-pie .jpg & breakfast.jpg

// const appleEl = getFoodDetails(
//   "images/apple-pie.jpg",
//   "Easy Food Recipe",
//   "All about healthy food"
// );
// ulEl.appendChild(appleEl);

// const breakfastEl = getFoodDetails(
//   "images/breakfast.jpg",
//   "Easy Breakfast",
//   "5-Minutes Recipe"
// );
// ulEl.appendChild(breakfastEl);

// now creating a data structure for image,name, description using array of objects:
// const FoodEl = getFoodDetails();

// const img = recipes.img;
// const name = recipes.name;
// const description = recipes.description;
// or; //object destructing--------

// for (let recipe in recipes) {
//   console.log(recipe);
//   console.log(recipes[recipe]);

//   ulEl.appendChild(getFoodDetails(recipes[recipe]));
//   console.log(ulEl);
// }

// const getPictures = (recipes) => {
//   const { image, name, description } = recipes;
//   // const image = recipes.image;
//   // const name = recipes.name;
//   // const description = recipes.description;
// };

// for (let i = 0; i < recipes.length; i++) {
//   //   console.log(i);
//   const element = getFoodDetails(i);
//   console.log();
//   ulEl.appendChild(element);
//   console.log(ulEl);
// }

//------------dropdown Menu--------------//
const dropMenu = () => {
  document.querySelector("#dropdown").classList.toggle("active");
};

document.querySelector("#menu").addEventListener("click", dropMenu);

//-----search ------//
const searchButton = () => {
  // alert("love coding");
  window.location.href = "https://google.co.nz";
};
document.querySelector("#search").addEventListener("click", searchButton);

//random images body---------//
const picArr = [
  { image: "images/apple-pie.jpg", category: "drink" },
  { image: "images/chicken.jpg", category: "chicken" },
  { image: "images/indian-mutton.jpg", category: "lamb" },
  { image: "images/lamb-chop.jpg", category: "lamb" },
  { image: "images/salmon.jpg", category: "drink" },
  { image: "images/chicken-wings.jpg", category: "chicken" },
];
console.log(picArr);
let chiPic = [];

for (let elm of picArr) {
  if (elm.category === "chicken") {
    chiPic.push(elm);
    console.log(chiPic);
  }
}

//with filter with exiting array
let lamPic = picArr.filter((elm) => {
  elm.category === "lamb";
});
console.log(lamPic);

const chickenProducts = () => {
  alert("hello");
};

document.querySelector("#chicken").addEventListener("click", chickenProducts);
