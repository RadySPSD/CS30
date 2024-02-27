// Drawing with loops 1
// Ahmed Rady
// February 27, 2024
//using loops + Arrays to create some visuiliztions

function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(220);
  cornersAndMouse();
}

function cornersAndMouse(){
  // draw some circles near each of the four corners
  // and connect some lines from there to the mouseposition
  fill(255);
  circle(width*0.05, height*0.05, 20);
  circle(width*0.95, height*0.05, 20);
  circle(width*0.05, height*0.95, 20);
  circle(width*0.95, height*0.95, 20);
  //lines
  line(width*0.05, height*0.05, mouseX, mouseY);
  line(width*0.95, height*0.05, mouseX, mouseY);
  line(width*0.05, height*0.95, mouseX, mouseY);
  line(width*0.95, height*0.95, mouseX, mouseY);
}