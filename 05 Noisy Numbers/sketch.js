// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//global variable

let segmentLength = 20;
let ballY = 200; let ySpeed;
let ballTime = 10; //start at any number...


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function segmentLine(){
  strokeWeight(15);

  let greyTime = 0;
  let x = 0;
  while (x < width){
    //option 1: random()
    let greyValue = random(0,255);

    //option 2
    greyValue = noise(greyTime);
    greyValue = map(greyValue,0,1,0,255);
    greyTime += 0.1;

    stroke(greyValue);
    line(x, height/2, x+segmentLength, height/2);
    x += segmentLength;
  }
}

function moveBall(){
  //option 1: random()
  strokeWeight(1);strokeWeight(0);
  ySpeed = random(-20,20);

  //option 2: perlin noice()
  ySpeed = noise(ballTime);
  ySpeed = map(ySpeed,0,1,-20,20);
  ballTime += 0.01;

  ballY+= ySpeed;
  circle(width*0.7, ballY,30);
}

function draw() {
  background(220);
  segmentLine();
  moveBall();
}
