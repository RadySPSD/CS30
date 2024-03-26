// Terrain Generation
// Ahmed Rady
// 25/3/2024
// terain that generates and a flag that goes to the highest point and a line that stays on the avrage height

//variables
let rectWidth = 1;
let rectTime = 1;
let highestPoint = 0;
let xForHighestPoint = 0;
let avgHeight = 0;

//functions
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  //drawRectangles();
}

//terrain generator
function drawRectangles(){
  highestPoint = 0;
  let rectHeight;
  fill(0);
  let timeX = rectTime;
  for(let x = 0; x < width; x += rectWidth){
    
    timeX += 0.01;
    rectHeight = noise(timeX);
    rectHeight = map(rectHeight,0,1,0,height * - 0.8);
    
    rect(x, height,rectWidth,rectHeight);
    
    //adding up all the rectangles to get the average
    avgHeight += rectHeight;

    //looking for the highest point
    if (rectHeight < highestPoint){
      highestPoint = rectHeight;
      xForHighestPoint = x;
      
    }
  }
  
  //drawing the flag
  drawFlag(xForHighestPoint,height + highestPoint - 10);   
  
  //calculating the average
  avgHeight = (avgHeight / (width/rectWidth)) + 700;
  //drawing the avrage line
  avarageLine( height - avgHeight);
  
  //console.log(avgHeight);
}

//function that draws the flag
function drawFlag(x, y){
  line(x,y,x, y + 12.5);
  fill(100);
  triangle(x,y,x,y - 12.5, x + 12.5 , y - 6.25);
}

function avarageLine(avarage){
  fill(255,0,0);
  rect(0,avarage ,width,10);
}

//main draw function
function draw() {
  background(255);
  rectTime += 0.03;
  drawRectangles();
}