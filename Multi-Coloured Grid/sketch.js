// Multi coloured Grid
// Ahmed Rady
// 3/12/2024
// The squares in the grid get bigger if you left click, and smaller if you left click. if you press any keybourd key, the colour will change.

//variables
let squareSize;
let squareColour;
let r; let g; let b; //the colours
let colorTime = 10; //for the noise functions
let canvasSize = 200; //size of canvas (can be changed)

squareSize = canvasSize/2; //adjusts grid to fit no matter the canvas size

function setup() { //main function
  createCanvas(canvasSize, canvasSize);
  document.addEventListener("contextmenu", event => event.preventDefault());//right click menue turns off.
  background(220);
  gridLines();
}

function draw() {

}

function gridLines() { // making the grids
  for (let x = 0; x < width; x = x + squareSize) { //the squares width
    for (let y = 0; y < height; y = y + squareSize) { //the squares height
      
      colorTime += .01; // much it changes by

      r = noise(colorTime);
      r = map(r,0,1,1,255);

      g = noise(colorTime);
      g = map(g,0,1,255,1);

      b = noise(colorTime);
      b = map(b,0,1,255,100);

      squareColour = color(r, g, b);
      fill(squareColour);
      square(x, y, squareSize);
    }
  }
}

function mousePressed(){
  if ( mouseIsPressed && mouseButton === LEFT){
    if(squareSize < 200) {squareSize = squareSize * 2;}
  }

  if ( mouseIsPressed && mouseButton === RIGHT){
    if(squareSize > 20) {squareSize = squareSize / 2;}
  }
  gridLines();
}

function keyPressed(){
  gridLines();
}