// loops.js
myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],
  };

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
//   let favoriteFood1 = document.createElement("li");
//   favoriteFood1.textContent = myInfo.favoriteFoods[0];
  
//   let favoriteFood2 = document.createElement("li");
//   favoriteFood2.textContent = myInfo.favoriteFoods[1];
  
//   let favoriteFood3 = document.createElement("li");
//   favoriteFood3.textContent = myInfo.favoriteFoods[2];
  
//   let favoriteFood4 = document.createElement("li");
//   favoriteFood4.textContent = myInfo.favoriteFoods[3];
  
  // Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
//   document.querySelector("#favorite-foods").appendChild(favoriteFood1);
//   document.querySelector("#favorite-foods").appendChild(favoriteFood2);
//   document.querySelector("#favorite-foods").appendChild(favoriteFood3);
//   document.querySelector("#favorite-foods").appendChild(favoriteFood4);

// --------------------------------------------------------------------------------------------------------------------

// Activity 1 - 1
// function forEachLoop() {
//     myInfo.favoriteFoods.forEach((food) => {
//         let favoriteFood = document.createElement("li");
//         favoriteFood.textContent = food;
//         document.querySelector("#favorite-foods").appendChild(favoriteFood);
//     });
// }

// forEachLoop();


// Activity 1 - 2
// function mapLoop() {
//     let favoriteFoods = myInfo.favoriteFoods.map(function(food) {
//         let favoriteFood = document.createElement("li");
//         favoriteFood.textContent = food;
//         document.querySelector("#favorite-foods").appendChild(favoriteFood);
//     })
// }

// mapLoop();

// --------------------------------------------------------------------------------------------------------------------

// Activity 3 - 1
function createFoodListItem(food) {
    return `<li>${food}</li>`;
}

// Example usage:
let foodItem = createFoodListItem("Pizza");
console.log(foodItem); // Output: <li>Pizza</li>


// Activity 3 - 2
function createPlaceListItem(place) {
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
}

// Example usage:
let placeItem = createPlaceListItem({ place: "Tokyo, Japan", length: "2 years" });
console.log(placeItem); // Output: <dt>Tokyo, Japan</dt><dd>2 years</dd>

// Activity 3 - 3
function generateHTML(list, templateFunction) {
    return list.map(templateFunction).join('');
}

// Example usage:
let favoriteFoodsHTML = generateHTML(myInfo.favoriteFoods, createFoodListItem);
console.log(favoriteFoodsHTML); // Output: <li>Fettucini</li><li>Steak</li><li>Chicken</li><li>Shrimp</li><li>Baked Potato</li>

let placesLivedHTML = generateHTML(myInfo.placesLived, createPlaceListItem);
console.log(placesLivedHTML); // Output: <dt>Rexburg, ID</dt><dd>5 years</dd><dt>Ammon, ID</dt><dd>3 years</dd><dt>Sandy, UT</dt><dd>1 year</dd>

// Activity 3 - 4
document.querySelector("#favorite-foods").innerHTML = favoriteFoodsHTML;
document.querySelector("#places-lived").innerHTML = placesLivedHTML;