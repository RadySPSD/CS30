// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectWidth = 1;
let rectTime = 1;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  drawRectangles();
}

function drawRectangles(){
  let rectHeight;
  fill(0);
  for(let x = 0; x < width; x += rectWidth){
    
    //rectHeight = (random (0,height*-0.8));
    //rect(x, height,rectWidth,rectHeight);

    rectTime += 0.01;
    rectHeight = noise(rectTime);
    rectHeight = map(rectHeight,0,1,0,height*-0.8);
    rect(x, height,rectWidth,rectHeight);

  }
}

function draw() {
}