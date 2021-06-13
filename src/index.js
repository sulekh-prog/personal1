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
const getFoodDetails = (image, name, description) => {
  const liEl = document.createElement("li");

  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", image[0]);
  liEl.appendChild(imgEl);

  const h2El = document.createElement("h2");
  h2El.textContent = name;
  liEl.appendChild(h2El);

  const pEl = document.createElement("p");
  pEl.textContent = description;
  liEl.appendChild(pEl);

  return liEl;
  // liEl.appendChild(ulEL) OVER HERE APPENDING WHEN PASSING THE ARGUMENTS//
};

const appEl = document.querySelector("#app");
appEl.appendChild(ulEl);

//using two images , name and description from the folder src/images/apple-pie .jpg & breakfast.jpg

// const appleEl = getFoodDetails(
//   "images/apple-pie .jpg",
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

const recipes = [
  {
    image: "src/images/apple-pie .jpg",
    name: "Easy Food Recipe",
    description: "All about healthy food",
  },
  {
    image: "images/breakfast.jpg",
    name: "Easy Breakfast",
    description: "5-Minutes Recipe",
  },
];

for (const recipe in recipes) {
  ulEl.appendChild(getFoodDetails(recipes[recipe[0]]));
  //   console.log(ulEl);
  console.log(recipes[recipe[0]]);
}

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
