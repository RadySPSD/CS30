// Gradient B
// Ahmed Rady
// 29 FEB 2024
// - describe what you did to take this project "above and beyond"

let rectHeight = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}


function draw() {
  //background(220);
  gradientBackgrounf();
}


function gradientBackgrounf(){
  //use a single loop to draw several rectangles
  // then color them into a gradient
  let y = 0;
  while(y < height){
    let c = color(mouseX,map(y,0,height,255,0),map(y,0,height,0,255));
    fill(c);
    rect(0,y,width,rectHeight);
    y += rectHeight;
  }
}