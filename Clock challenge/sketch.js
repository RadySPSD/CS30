// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  drawStaticClock();
  drawClockHands();
}

function drawStaticClock(){
  translate(width/2,width/2); // do this to get the lines in the middle
  push();
  circle(0,0,300);
  let count = 0;let angle = 6;
  while (count < 60){
    if (count % 5 === 0){
      strokeWeight(3);
      line(110,0,140,0);
    }

    

    else{
      strokeWeight(1);
      line(125,0,140,0);
    }
    
    rotate(angle);
    count ++;
  }
}

function drawClockHands(){
  push();
  stroke(2000,0,0);
  strokeWeight(1);
  rotate(second()*6);
  line(0,0,0,130);
  pop();
}