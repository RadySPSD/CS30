// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  //noLoop();
  background(220);
  angleMode(DEGREES);
}

function randomElement(currentLen){
  push();
  rotate(random(360));
  while(currentLen > 5){
    rotate(random(-45,45));
    line(0,0,0,currentLen);
    translate(0,currentLen);
    currentLen += 0.75;
  }
  pop();
}

function draw() {
  translate(width/2,height/2);
  for(let i=0; i<500; i++){
    randomElement(random(20,70));
  }
}
