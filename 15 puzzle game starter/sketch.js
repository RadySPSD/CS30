// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let squareSize = 50;
const NUM_ROWS =  4; const NUM_COLS = 5;

let grid =
[[0,    255, 0, 0, 0],
 [0,     0,   0,   255,   0], 
 [255,   0,  255,  255,  0], 
 [255, 255, 0, 255, 255]
];

let row,col;

function setup() {
  createCanvas(NUM_COLS * squareSize, NUM_COLS * squareSize);
}

function draw() {
  background(220);
  drawGrid();
  col = getCurrentX();
  row = getCurrentY(); print(col,row);
}

function getCurrentY(){
  let constrainY = constrain(mouseY,0,height-1);
}

function getCurrentX(){
  let constrainX = constrain(mouseX,0,width-1);
  print(mouseX/squareSize);
  return int (constrainX/squareSize);
}

function drawGrid(){
  for(let y = 0; y < NUM_ROWS; y++){
    for(let x = 0; x < NUM_COLS; x++){
      let fillValue = grid[y][x];
      fill(fillValue);
      square(x*squareSize, y*squareSize, squareSize);
    }
  }
}