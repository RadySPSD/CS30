// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let squareSize = 200;
let squareColour;
let r; let g; let b;


function setup() {
  createCanvas(400, 400);
  document.addEventListener("contextmenu", event => event.preventDefault());
  background(220);
  gridLines();
}



function draw() {

}

function gridLines() {
  for (let x = 0; x < width; x = x + squareSize) {
    for (let y = 0; y < height; y = y + squareSize) {

      r = random (0,255);
      g = random (0,255);
      b = random (0,255);
    
      squareColour = color(r, g, b);
      fill(squareColour);
      square(x, y, squareSize);
    }
  }
}

function mousePressed(){
  if ( mouseIsPressed && mouseButton === LEFT){
    if(squareSize < 200) {squareSize = squareSize * 2;}
  }

  if ( mouseIsPressed && mouseButton === RIGHT){
    if(squareSize > 10) {squareSize = squareSize / 2;}
  }
  gridLines();
}