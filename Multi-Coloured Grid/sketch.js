// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let squareSize = 40;



function setup() {
  createCanvas(400, 400);
  document.addEventListener("contextmenu", event => event.preventDefault());
}

function draw() {
  background(220);
  gridLines();
}

function gridLines() {
  for (let x = 0; x < width; x = x + squareSize) {
    for (let y = 0; y < height; y = y + squareSize) {
      square(x, y, squareSize);
    }
  }
}

function mousePressed(){
  if ( mouseIsPressed && mouseButton === LEFT){
    if(squareSize < 400) {squareSize = squareSize += 20;}
  }

  if ( mouseIsPressed && mouseButton === RIGHT){
    if(squareSize > 10) {squareSize = squareSize -= 10;}
  }
}