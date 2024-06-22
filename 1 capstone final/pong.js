class pongGame {
  constructor() {
    // Initialize game positions and speeds
    this.gameX = width / 2 - 400;
    this.gameY = height / 2 - 450;
    this.ballX = width / 2;
    this.ballY = height / 2;
    this.ballXSpeed = 6;
    this.ballYSpeed = 3;
    this.playerAX = width / 2 - 400 + 25;
    this.playerAY = height / 2;
    this.playerBX = width / 2 - 400 + 760;
    this.playerBY = height / 2;
    this.space = 50;
    this.playerTurn = "B"

    // Initialize player scores and game state
    this.playerAScore = 0;
    this.playerBScore = 0;
    this.gameState = "onGoing";

    // Previous mouse state tracking
    this.prevMouseState = false;
  }

  display() {
    background(200); // Draw background
    fill(255);
    rect(this.gameX, this.gameY, 800); // Draw game board

    fill(150);
    ellipse(this.ballX, this.ballY, 15); // Draw ball
    this.ballX += this.ballXSpeed; // Move ball horizontally
    this.ballY += this.ballYSpeed; // Move ball vertically
    this.bouncing(); // Handle ball bouncing off walls

    this.player(); // Draw players
    this.playerAMovement(); // Handle player A movement
    this.playerBMovement(); // Handle player B movement

    this.mainHubInPong(); // Draw and handle main menu button

    this.collisionDetection(); // Check for ball-player collisions

    this.losing(); // Handle score updates and ball reset

    this.showingScore(); // Display current scores
    this.whichPlayer();
  }

  whichPlayer() {
    if (this.ballXSpeed > 1) {
      this.playerTurn = "B"
    }
    if (this.ballXSpeed < 1) {
      this.playerTurn = "A"
    }
  }

  bouncing() {
    // Handle ball bouncing off walls
    if (this.ballX + 7.5 >= this.gameX + 800 || this.ballX - 7.5 <= this.gameX) {
      this.ballXSpeed *= -1;
    }
    if (this.ballY + 7.5 >= this.gameY + 800 || this.ballY - 7.5 <= this.gameY) {
      this.ballYSpeed *= -1;
    }
  }

  player() {
    // Draw players
    fill(0);
    rect(this.playerAX, this.playerAY, 15, 100); // Player A
    rect(this.playerBX, this.playerBY, 15, 100); // Player B
  }

  playerAMovement() {
    // Handle player A movement
    if (this.playerTurn === "A") {


      if (keyIsPressed && keyCode === 87 && this.playerAY > 50) {
        this.playerAY -= 10; // Move up
      }
      if (keyIsPressed && keyCode === 83 && this.playerAY + 60 < 800) {
        this.playerAY += 10; // Move down
      }
    }
  }

  playerBMovement() {
    // Handle player B movement
    if (this.playerTurn === "B") {


      if (keyIsPressed && keyCode === 38 && this.playerBY > 50) {
        this.playerBY -= 10; // Move up
      }
      if (keyIsPressed && keyCode === 40 && this.playerBY + 60 < 800) {
        this.playerBY += 10; // Move down
      }
    }
  }

  mainHubInPong() {
    // Draw main menu button in Pong game
    fill(150);
    rect(width / 2 - 400, 850, 200, 50); // Button rectangle
    textSize(30);
    fill(0);
    text("Back To Menu", width / 2 - 390, 890); // Button text

    // Check if mouse is pressed on the button
    if (mouseX >= width / 2 - 400 && mouseX <= width / 2 - 400 + 200 && mouseY >= 850 && mouseY <= 900 && mouseIsPressed) {
      background(200); // Clear screen
      loop(); // Restart animation loop
      mainHubActive = true; // Set main hub active
      snakeActive = false; // Set snake game inactive
      flappyBirdActive = false; // Set Flappy Bird game inactive
      pongActive = false; // Set Pong game inactive
      clear(); // Clear canvas
      game = new mainHub(); // Create new instance of mainHub game
    }
  }

  collisionDetection() {
    // Check for ball-player collisions
    if (this.ballX <= this.playerAX + 25 && this.ballY >= this.playerAY && this.ballY <= this.playerAY + 100) {
      this.ballXSpeed *= -1; // Reverse ball direction on collision with player A
    }
    if (this.ballX >= this.playerBX - 5 && this.ballY >= this.playerBY && this.ballY <= this.playerBY + 100) {
      this.ballXSpeed *= -1; // Reverse ball direction on collision with player B
    }
  }

  losing() {
    // Handle scoring and ball reset on ball out of bounds
    if (this.ballX < this.gameX + 10) {
      this.playerBScore++; // Increment player B score
      this.resetBall(); // Reset ball position and direction
    }
    if (this.ballX > this.gameX + 790) {
      this.playerAScore++; // Increment player A score
      this.resetBall(); // Reset ball position and direction
    }
  }

  resetBall() {
    // Reset ball position and direction
    this.ballX = this.gameX + 400; // Reset ball X position
    this.ballY = this.gameY + 400; // Reset ball Y position


    this.playerAY = height / 2;

    this.playerBY = height / 2;


  }

  showingScore() {
    // Display player scores
    fill(0);
    textSize(20);
    text("Player A Score: " + this.playerAScore, width / 2 - 390, 40); // Player A score
    text("Player B Score: " + this.playerBScore, width / 2 + 290, 40); // Player B score
  }

  resumeButton() {
    // Display and handle resume button
    fill(150);
    rect(width / 2 - 400, 925, 200, 50); // Resume button rectangle
    textSize(30);
    fill(0);
    text("Resume", width / 2 - 370, 965); // Resume button text

    // Check if mouse is pressed on the resume button
    if (mouseX >= width / 2 - 400 && mouseX <= width / 2 - 400 + 200 && mouseY >= 925 && mouseY <= 975 && mouseIsPressed) {
      loop(); // Restart animation loop
      pongActive = false; // Set Pong game inactive
    }
  }
}
