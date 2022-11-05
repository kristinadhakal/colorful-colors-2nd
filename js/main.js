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
inputEl.addEventListener("keyup", submitHandler);

function submitHandler(event) {
  let divStr = "";
  for (let i = 0; i < colours.length; i++) {
    if (colours[i].includes(inputEl.value))
    divStr += `<div style ="background: ${colours[i]}">${colours[i]}</div>`;
  }
  containerEL.innerHTML = divStr;
  }

function displayColours(colours) {
  // Display colours on page
  let divStr = "";
  let count = 0;

  for (let i = 0; i < colours.length; i++) {
   divStr += `<div style ="background: ${colours[i]}">${colours[i]}</div>`;
      count++;
    
  }
  containerEL.innerHTML = divStr + `<p> Count: ${count}</p>`;
}

// array

// Access lenth of array
// console.log(colours.length)
