// Terrain Generation
// Ahmed Rady
// 25/3/2024
// terrain that generates and a flag that goes to the highest point and a line that stays on the avrage height

//variables
let rectWidth = 2;
let rectTime = 1;
let highestPoint = 0;
let xForHighestPoint = 0;
let rectCount = 0;
let avgHeight = 0;
let keyPressedFlag = false; // Flag to track if a key is pressed

// Changing the smoothness of the terrain
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
      if (rectWidth < 3){
              rectWidth+= 0.1;
      }
    } 
  if (keyCode === RIGHT_ARROW) {
      if (rectWidth > 1){
              rectWidth-= 0.1;
      }
}
}

function keyReleased() {
  keyPressedFlag = false; // Reset the flag when the key is released
}


//functions
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  drawRectangles();
}

//terrain generator
function drawRectangles(){ 
  let rectHeight;
  fill(0);
  let timeX = rectTime;
  
  //reseting the values of the variables
  highestPoint = 0;
  avgHeight = 0;
  rectCount = 0;
  
  for(let x = 0; x < width; x += rectWidth){

    //randomizing using noise
    timeX += 0.01;
    rectHeight = map(noise(timeX), 0, 1, 0, height * 0.8);

    //recording the number of rectangles
    rectCount++;

    //adding up all the rectangles to get the average
    avgHeight += rectHeight;
    
    //looking for the highest point
    if (rectHeight > highestPoint) {
      highestPoint = rectHeight;
      xForHighestPoint = x;
    }

    //drawing the terrain
    rect(x, height, rectWidth, rectHeight * -1);
  }

  //drawing the flag
  drawFlag(xForHighestPoint, height - highestPoint - 10);
  
  //calculating the average
  avgHeight = avgHeight/rectCount;
    
  //drawing the average line
  averageLine(height - avgHeight);
}

//function that draws the flag
function drawFlag(x, y){
  line(x, y, x, y + 12.5);
  fill(100);
  triangle(x, y, x, y - 12.5, x + 12.5 , y - 6.25);
}

//function that draws the average line
function averageLine(avarage){
  fill(255,0,0);
  rect(0,avarage ,width,10);
}

//main draw function
function draw() {
  background(225);
  rectTime += 0.03;
  drawRectangles();
}