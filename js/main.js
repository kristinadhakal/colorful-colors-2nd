// Colour Array by kristina

// VAriables for HYML Elements
let containerEL = document.getElementById("container");
let inputEl = document.getElementById("colour-in");

// Global VAriable
let colours;

/// Fetch contains from colours.txt
fetch("colors.txt").then(convertData).then(processData);

function convertData(rawData) {
  return rawData.text();
}

function processData(stringData) {
  colours = stringData.split(/\r?\n/);
  displayColours(colours);
}

console.log("After Fetch");

// EVenet Listener
inputEl.addEventListener("keydown", submitHandler);

function submitHandler(event) {
  if (event.keyCode === 13) {
    // Add user's colours to the colours array and display
    colours.push(inputEl.value);
    inputEl.value = "";
    displayColours(colours);
  }
}

function displayColours(colours) {
  // Display colours on page
  let divStr = "";
  let count = 0;

  for (let i = 0; i < colours.length; i++) {
    if (colours[i].length === 4) {
      divStr += `<div style ="background: ${colours[i]}">${colours[i]}</div>`;
      count++;
    }
  }
  containerEL.innerHTML = divStr + `<p> Count: ${count}</p>`;
}

// array

// Access lenth of array
// console.log(colours.length)
