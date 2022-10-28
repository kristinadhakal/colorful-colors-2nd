// Random Library

// return a random decimal b/t low (inclisive) and high (exclusive)
function randomDec(low, high) {
    return Math.random() * (high - low) + low;
  }
  
  // return a random interger b/t low (inclusive) and high (exclusive)
  function randomInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low);
  }
  
  // return a random rgb colour - 'rbg(___,__,___)'
  function randomRGB() {
    
    let r = randomInt(0, 256);
    let g = randomInt(0, 256);
    let b = randomInt(0, 256);
    return "rgb (" + r + "," + g + "," + b + ")";
    }