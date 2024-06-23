class flappyBird {
  constructor() {
    this.speed = 5; // Speed of the game
    this.score = 0; // Player's score
    this.gameOver = false; // Game over flag

    // Bird object (using external library or class Sprite)
    this.bird = new Sprite(50, height / 2, 20, "d");
    this.bird.depth = -1; // Setting depth to ensure proper rendering order

    // Group of obstacles (using external library or class Group)
    this.obstacles = new Group();

    // Custom properties for obstacles group
    this.obstacles.collider = 'k';
    this.obstacles.h = 700;
    this.obstacles.w = 50;
    this.obstacles.color = "green";
    this.obstacles.depth = -1;

    // Physics settings
    world.gravity.y = 10;

    // Initial values for gapSize, top, and bottom
    this.gapSize = this.gapSize;
    this.top = top;
    this.bottom = this.bottom;
  }

  // Function to handle game over
  lose() {
    // Display game over message
    fill(0, 255, 0);
    rect(width / 2 + 450, height / 2 - 85, 300, 200);
    fill(255, 0, 0);
    textSize(100);
    text("Game", width / 2 + 475, height / 2);
    text("Over", width / 2 + 495, height / 2 + 75);

    textSize(65)
    text("Left click",width/2 + 490, height/2 + 300)
    text("to see options",width/2 + 450, height/2 + 350)

    noLoop(); // Stop the game loop
    this.gameOver = true; // Set game over flag
    this.score = 0; // Reset score
  }

  // Function to display game elements
  display() {
    this.showScore(); // Display current score

    // Increase score every 60 frames
    if (frameCount % 60 === 0) {
      this.score++;
    }

    // Check collision with obstacles
    if (this.bird.overlaps(this.obstacles)) {
      this.lose(); // Call lose function if collision detected
    }

    world.step(); // Update physics world
    camera.x = this.bird.x + 100; // Adjust camera position

    // Check if bird hits top or bottom boundaries
    if (this.bird.y > height || this.bird.y < 50) {
      // Reset bird position and velocity
      this.bird.y = height / 2;
      this.bird.x = 100;
      this.bird.vel.x = 0;
      this.bird.vel.y = 0;
      this.lose(); // Call lose function
    }

    this.pipes(); // Generate and move pipes
  }

  // Function to display score on screen
  showScore() {
    fill(0);
    textSize(90);
    text("Score: " + this.score, width / 2 + 465, height / 2 - 100);
  }

  // Function to handle player controls
  controls() {
    if (kb.presses('space')) { // Check if spacebar is pressed
      this.bird.vel.y = 0; // Reset bird's vertical velocity
      this.bird.vel.y -= 4; // Apply upward force to bird
    }
  }

  // Function to handle restart button
  restartButton() {
    // Draw restart button
    fill(150);
    rect(width / 2 - 100, 850, 200, 50,5);
    textSize(60);
    fill(0);
    text("restart", width / 2 - 80, 890);

    // Check if mouse clicks on restart button
    if (mouseX >= width / 2 - 100 && mouseX <= width / 2 + 100 &&
      mouseY >= 850 && mouseY <= 900 && mouseIsPressed === true) {
      // Reset game state
      this.gameOver = false;
      loop(); // Resume game loop

      // Reset bird's position and velocity
      this.bird.y = height / 2;
      this.bird.x = 100;
      this.bird.vel.x = 0;
      this.bird.vel.y = 0;

      // Remove all obstacles and generate new pipes
      this.obstacles.removeAll();
      this.pipes();
    }
  }

  // Function to generate pipes
  pipes() {
    // Generate pipes every 100 frames if game is not over
    if (this.gameOver === false && frameCount % 100 === 0) {
      // Set gap size randomly between 80 and 350
      this.gapSize = random(80, 350);

      // Create top obstacle
      this.top = new this.obstacles.Sprite();
      this.top.y = this.gapSize + 100;
      this.top.x = this.bird.x + 500;
      this.top.vel.x = -3;

      // Create bottom obstacle
      this.bottom = new this.obstacles.Sprite();
      this.bottom.y = this.top.h + this.gapSize + 200;
      this.bottom.x = this.bird.x + 500;
      this.bottom.vel.x = -3;
    }
  }

  // Function to return to main hub from Flappy Bird game
  mainHubInFlappy() {
    // Draw back to menu button
    fill(150);
    rect(50, 850, 200, 50,5);
    textSize(30);
    fill(0);
    text("Back To Menu", 60, 890);

    // Check if mouse clicks on back to menu button
    if (mouseX >= 50 && mouseX <= 250 && mouseY >= 850 && mouseY <= 900 && mouseIsPressed === true) {
      // Clear game elements and return to main hub
      this.obstacles.removeAll();
      this.bird.remove();
      background(200);
      loop(); // Resume game loop
      mainHubActive = true; // Set main hub active
      snakeActive = false;
      flappyBirdActive = false;
      pongActive = false;
      clear(); // Clear canvas
      game = new mainHub; // Create new instance of mainHub
    }
  }
}
