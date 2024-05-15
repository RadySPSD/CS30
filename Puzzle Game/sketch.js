// Puzzles
// Ahmed Rady
// 5/15/2024
// A Game where you are required to get all the squares to be black or all the squares to be
// white. When the mouse cursor is on a square, the highlight shows you the squares that
// will change, when you left click the outlined squares will change color. You can change
// the out line shape by pressing the space key. you can switch between to hilights, the
// square highlight, and the cross highlight. If you are stuck, you can use
// shift + left click to change eachsquare individiually.

// Number of rows and columns for the grid
let NUM_ROWS = 4;
let NUM_COLS = 5;

//  Width and height of grid squares
let rectWidth, rectHeight;

// Current square being interacted with
let currentRow, currentCol;

// Store the state of the Highlight, cross, square
let state = "cross";

// Setup function
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectWidth = width / NUM_COLS;
  rectHeight = height / NUM_ROWS;
  
  // Randomizing the black and whites in the grid
  gridData = [
    [randomSpawn(), randomSpawn(), randomSpawn(), randomSpawn(), randomSpawn()],
    [randomSpawn(), randomSpawn(), randomSpawn(), randomSpawn(), randomSpawn()],
    [randomSpawn(), randomSpawn(), randomSpawn(), randomSpawn(), randomSpawn()],
    [randomSpawn(), randomSpawn(), randomSpawn(), randomSpawn(), randomSpawn()]
  ];
}

// Main draw function
function draw() {
  background(220);
  determineActiveSquare(); // Determine the square the mouse is over
  drawGrid(); // Render the game grid
  winCondition(); // Check if the game is won

  // Highlight squares based on the current state
  if (state === "cross") {
    // Cross pattern
    highlightGrid(currentCol, currentRow);
    highlightGrid(currentCol - 1, currentRow);
    highlightGrid(currentCol + 1, currentRow);
    highlightGrid(currentCol, currentRow - 1);
    highlightGrid(currentCol, currentRow + 1);
  } else {
    // Square pattern
    highlightGrid(currentCol, currentRow);
    highlightGrid(currentCol, currentRow + 1);
    highlightGrid(currentCol + 1, currentRow);
    highlightGrid(currentCol + 1, currentRow + 1);
  }
}

// Switching patterns with spacebar
function keyPressed() {
  // Toggle between highlight patterns when space key is pressed
  if (keyCode === 32 && keyIsPressed) {
    if (state === "cross") state = "square";
    else state = "cross";
  }
}

// Function to highlight a grid square
function highlightGrid(col, row) {
  fill(144, 238, 144, 120);
  rect(col * rectWidth, row * rectHeight, rectWidth, rectHeight);
}

// Function to handle mouse clicks
function mousePressed() {
  // Individual square toggle when shift key is pressed
  if (mouseButton === LEFT && keyCode === SHIFT && keyIsPressed) {
    flip(currentCol, currentRow);
  } else if (mouseButton === LEFT) {
    // Toggle squares based on the current state
    if (state === "cross") {
      flip(currentCol, currentRow);
      flip(currentCol - 1, currentRow);
      flip(currentCol + 1, currentRow);
      flip(currentCol, currentRow - 1);
      flip(currentCol, currentRow + 1);
    } else {
      flip(currentCol, currentRow);
      flip(currentCol + 1, currentRow);
      flip(currentCol, currentRow + 1);
      flip(currentCol + 1, currentRow + 1);
    }
  }
}

// Function to toggle the color of a square
function flip(col, row) {
  if (col >= 0 && col < NUM_COLS && row >= 0 && row < NUM_ROWS) {
    if (gridData[row][col] === 0) gridData[row][col] = 255;
    else gridData[row][col] = 0;
  }
}

// Function to determine the active square based on mouse position
function determineActiveSquare() {
  currentRow = int(mouseY / rectHeight);
  currentCol = int(mouseX / rectWidth);
}

// Function to draw the game grid
function drawGrid() {
  for (let x = 0; x < NUM_COLS; x++) {
    for (let y = 0; y < NUM_ROWS; y++) {
      fill(gridData[y][x]);
      rect(x * rectWidth, y * rectHeight, rectWidth, rectHeight);
    }
  }
}

// Function to check if the game is won
function winCondition() {
  let solved = 0;
  for (let x = 0; x < NUM_COLS; x++) {
    for (let y = 0; y < NUM_ROWS; y++) {
      if (gridData[y][x] === 0) {
        solved++;
      }
      if (gridData[y][x] === 255) {
        solved--;
      }
    }
  }
  // Display winning message if all squares are the same color
  if (solved === 20 || solved === -20) {
    fill(255, 0, 0);
    textSize(35);
    text("YOU WIN!", width / 2, height / 2);
  }
}

// Function to randomly spawn black or white squares
function randomSpawn() {
  let numberChosen = round(random(0, 2));
  if (numberChosen === 0) return 0;
  else return 255;
}
