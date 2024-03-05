// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let squareSize = 40;



function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  controlSize();
  gridLines();
}

function gridLines() {
  for (let x = 0; x < width; x = x + squareSize) {
    for (let y = 0; y < height; y = y + squareSize) {
      square(x, y, squareSize);
    }
  }
}

function controlSize(){
  if ( mouseButton === LEFT){
    squareSize += 1;
  }
}
