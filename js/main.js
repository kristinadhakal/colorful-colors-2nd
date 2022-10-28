// Colour Array by kristina

// VAriables for HYML Elements
let containerEL = document.getElementById("container");

// array
let colours = ["red", "green", "blue", "orange", "cyan", "purple"];

// lcick event
document.addEventListener("click", update);

// function update() {
//   containerEL.innerHTML = `<div style = "background: ${
//     colours[randomInt(0, colours.length)]
//   }"></div>`;
// }

// or

function update() {
  let randCol = randomElement(colours);
  containerEL.innerHTML = `<div style = "background: ${randCol}"></div>`;
}

// Access lenth of array
// console.log(colours.length)
