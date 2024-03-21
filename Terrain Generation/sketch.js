// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectWidth = 2;
let rectTime = 1;
let highestPoint = 0;
let xForHighestPoint = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  drawRectangles();
}

function drawRectangles(){
  highestPoint = 0;
  let rectHeight;
  fill(0);
  let timeX = rectTime;
  for(let x = 0; x < width; x += rectWidth){
    
    timeX += 0.01;
    rectHeight = noise(timeX);
    rectHeight = map(rectHeight,0,1,0,height*-0.8);
    rect(x, height,rectWidth,rectHeight);
    
    
    if (rectHeight < highestPoint){
      highestPoint = rectHeight;
      xForHighestPoint = x;      
      
    }
  }
  drawFlag(xForHighestPoint,height + highestPoint - 10);
}

function drawFlag(x, y){
  line(x,y,x, y + 12.5);
  fill(100);
  triangle(x,y,x,y - 12.5, x + 12.5 , y - 6.25);
}

function avarageLine(avarage){
  fill(255,0,0);
  rect(0,avarage,width,10);
}

function draw() {
  background(255);
  rectTime += 0.03;
  avarageLine(heightAvarage);
  console.log(heightAvarage);
  drawRectangles();
}
//hello
