// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let circleSize;
let circleTime = .10;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  diameter();
}

function diameter(){
  circleSize = noise(circleTime);
  //circleSize = map(circleSize,10,10,10,10);
  strokeWeight(10);
  circle(200,200,circleSize);

}
