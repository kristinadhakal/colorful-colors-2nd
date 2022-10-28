// Colour Array by kristina

// VAriables for HYML Elements 
let containerEL = document.getElementById("container");


let colours = ["red", "green", "blue", "orange", "cyan"];

containerEL.innerHTML = `<div style = "background: ${colours[randomInt(0,5)]}"></div>`;