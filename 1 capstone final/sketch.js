let mainHubActive = true; // Flag for the main hub screen
let snakeActive = false; // Flag for the snake game screen
let flappyBirdActive = false; // Flag for the Flappy Bird game screen
let pongActive = false; // Flag for the Pong game screen
let game = new mainHub(); // Initialize the game as the main hub

function setup() {
  createCanvas(2000, 981); // Create a canvas for the games
  game = new mainHub(); // Initialize the game object
}

function draw() {
  // Main draw function based on active game screens
  if (mainHubActive) {
    background(200); // Draw background
    game.playSnake(); // Play snake game
    game.playFlappyBird(); // Play Flappy Bird game
    game.playPong(); // Play Pong game
  } else if (snakeActive) {
    game.display(); // Display snake game
    game.moveSnake(); // Move snake
    game.increaseScore(); // Increase snake game score
  } else if (flappyBirdActive) {
    background(200); // Draw background
    game.display(); // Display Flappy Bird game
  } else if (pongActive) {
    game.display(); // Display Pong game
  }
}

function keyPressed() {
  // Handle key presses based on active game screens
  if (snakeActive) {
    game.controls(); // Control snake game
  } else if (flappyBirdActive) {
    game.controls(); // Control Flappy Bird game
  }
}

function mousePressed() {
  // Handle mouse presses based on active game screens
  if (mainHubActive) {
    game.playSnake(); // Play snake game
    game.playFlappyBird(); // Play Flappy Bird game
  } else if (snakeActive) {
    game.restartButton(); // Handle restart button for snake game
    menuButton(); // Handle menu button for snake game
  } else if (flappyBirdActive) {
    game.restartButton(); // Handle restart button for Flappy Bird game
    game.mainHubInFlappy(); // Return to main hub from Flappy Bird game
  }
  else if (pongActive) {
    game.mainHubInPong(); // Return to main hub from Pong game
  }
}

function menuButton() {
  // Draw and handle the menu button
  fill(150); // Set fill color
  rect(50, 850, 200, 50); // Draw rectangular button
  textSize(30); // Set text size
  fill(0); // Set text fill color
  text("Back To Menu", 60, 890); // Display text

  // Check if mouse is pressed within the menu button boundaries
  if (mouseX >= 50 && mouseX <= 250 && mouseY >= 850 && mouseY <= 900 && mouseIsPressed === true) {
    background(200); // Clear canvas background
    loop(); // Restart animation loop
    mainHubActive = true; // Set main hub screen active
    snakeActive = false; // Set snake game screen inactive
    flappyBirdActive = false; // Set Flappy Bird game screen inactive
    pongActive = false; // Set Pong game screen inactive
    clear(); // Clear canvas
    game = new mainHub(); // Initialize game as the main hub
  }
}
