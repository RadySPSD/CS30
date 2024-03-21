// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let gridSpacing = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  drawDisarray();
}

function drawDisarray(){
  for(let x =gridSpacing/2; x<width; x+=gridSpacing){
    for(let y = gridSpacing/2; y < height; y +=gridSpacing){
      square(x,y, gridSpacing);
    }
  }
}

function draw() {
}
