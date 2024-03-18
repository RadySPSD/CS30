// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  
  circle(width/2,width/2,400);
  let angle = 0;
  while(angle < 45){
    push();
    rotate(angle);
    line(800,50,0,0);
    pop();
    angle += 1;
  }
}
