class snakeGame {
  constructor() {
    // Initialize game properties
    this.squareSize = 50; // Size of each square in the grid
    this.gridX = 50; // Starting X position of the grid
    this.gridY = 50; // Starting Y position of the grid
    this.snakeX = 400; // Initial X position of the snake
    this.snakeY = 400; // Initial Y position of the snake
    this.direction = "right"; // Initial direction of the snake
    this.foodX = 50 * Math.floor(random(1, 16)); // X position of the food
    this.foodY = 50 * Math.floor(random(1, 16)); // Y position of the food
    this.score = 0; // Initial score
    this.moveSpeed = 50; // Speed at which the snake moves
    this.otherSegments = []; // Array to hold additional snake segments (tail)
    this.losing = false; // Flag to track if the game is over
    this.foodCheckX = 0; // X position for checking food placement validity
    this.foodCheckY = 0; // Y position for checking food placement validity
  }

  // Restart button functionality
  restartButton() {
    fill(150);
    rect(650, 850, 200, 50);
    textSize(60);
    fill(0);
    text("restart", 675, 890);

    // Check if restart button is clicked
    if (mouseX >= 650 && mouseX <= 850 && mouseY >= 850 && mouseY <= 900 && mouseIsPressed === true) {
      // Reset game state
      this.losing = false;
      this.snakeX = 400;
      this.snakeY = 400;
      this.direction = "right";
      this.moveSpeed = 50;
      this.foodX = 50 * Math.floor(random(1, 16));
      this.foodY = 50 * Math.floor(random(1, 16));
      this.score = 0;
      this.otherSegments = [];
    }
  }

  // Menu button functionality (currently placeholder)
  MenuButton() {
    fill(150);
    rect(50, 850, 200, 50);
    textSize(30);
    fill(0);
    text("Back To Menu", 60, 890);

    // Check if menu button is clicked
    if (mouseX >= 50 && mouseX <= 250 && mouseY >= 850 && mouseY <= 900 && mouseIsPressed === true) {
      print("menu"); // Placeholder action (print to console)
    }
  }

  // Spawn new segments for the snake (tail)
  spawningSegments() {
    this.otherSegments.push(new snakeSegment(this.snakeX, this.snakeY));
  }

  // Handle keyboard controls for the snake
  controls() {
    if (keyCode === 65 || keyCode === LEFT_ARROW) { // Left arrow or 'A' key
      if (this.snakeX > 50) {
        if (this.direction !== "right") {
          this.direction = "left"; // Change direction to left
        }
      }
    } else if (keyCode === 68 || keyCode === RIGHT_ARROW) { // Right arrow or 'D' key
      if (this.snakeX < 800) {
        if (this.direction !== "left") {
          this.direction = "right"; // Change direction to right
        }
      }
    } else if (keyCode === 87 || keyCode === UP_ARROW) { // Up arrow or 'W' key
      if (this.snakeY > 50) {
        if (this.direction !== "down") {
          this.direction = "up"; // Change direction to up
        }
      }
    } else if (keyCode === 83 || keyCode === DOWN_ARROW) { // Down arrow or 'S' key
      if (this.snakeY < 800) {
        if (this.direction !== "up") {
          this.direction = "down"; // Change direction to down
        }
      }
    }
  }

  // Increase score and handle food collision
  increaseScore() {
    if (this.snakeX === this.foodX && this.snakeY === this.foodY) {
      this.score++; // Increment score
      this.spawningSegments(); // Add new segment (tail) to the snake
      this.foodCheck(); // Check and update food position
    }
  }

  // Check and update food position to ensure it doesn't overlap with snake
  foodCheck() {
    this.foodCheckX = 50 * Math.floor(random(1, 16));
    this.foodCheckY = 50 * Math.floor(random(1, 16));

    if (this.foodCheckX !== this.snakeX && this.foodCheckX !== this.segmentX &&
      this.foodCheckY !== this.snakeY && this.foodCheckY !== this.segmentY) {
      this.foodX = this.foodCheckX;
      this.foodY = this.foodCheckY;
    }
  }

  // Move the snake based on its direction
  moveSnake() {
    if (frameCount % 10 === 0) { // Control snake movement speed
      if (this.losing === false) { // Check if game is not over
        this.updateTail(); // Update snake tail position

        // Check if snake goes out of bounds
        if (this.snakeX > 800 || this.snakeX < 50 || this.snakeY > 800 || this.snakeY < 50) {
          this.losing = true; // Game over if snake hits boundary
          this.otherSegments.shift(); // Remove last segment from snake tail
        } else if (this.direction === "right") {
          this.snakeX += this.moveSpeed; // Move snake right
        } else if (this.direction === "left") {
          this.snakeX -= this.moveSpeed; // Move snake left
        } else if (this.direction === "down") {
          this.snakeY += this.moveSpeed; // Move snake down
        } else if (this.direction === "up") {
          this.snakeY -= this.moveSpeed; // Move snake up
        }
      }
    }
  }

  // Update snake tail segments position
  updateTail() {
    if (this.losing !== true) {
      for (let i = this.otherSegments.length - 1; i > 0; i--) {
        if (this.losing === true) { // Check if game is over
          // Display game over message
          fill(0, 255, 0);
          rect(windowWidth / 2 - 205, windowHeight / 2 - 65 + 1000, 430, 100);
          fill(255, 0, 0);
          textSize(100);
          text("game over", windowWidth / 2 - 200, windowHeight / 2 + 1000);
        } else {
          // Update tail segment positions
          this.otherSegments[i].segmentX = this.otherSegments[i - 1].segmentX;
          this.otherSegments[i].segmentY = this.otherSegments[i - 1].segmentY;

          // Check if snake collides with itself
          if (this.snakeX === this.otherSegments[i].segmentX && this.snakeY === this.otherSegments[i].segmentY) {
            this.losing = true; // Game over if snake collides with itself
          }
        }
      }

      // Update the first segment to follow the snake's head
      if (this.otherSegments.length > 0) {
        this.otherSegments[0].segmentX = this.snakeX;
        this.otherSegments[0].segmentY = this.snakeY;
      }
    }
  }

  // Display the snake game
  display() {
    background(200); // Clear background

    // Display game instructions
    fill(255, 0, 0);
    textSize(40);
    text("Controls: W,A,S,D", windowWidth / 2 + 225, windowHeight - 700);
    text("or", windowWidth / 2 + 350, windowHeight - 640);
    text("Controls: Up,Down,Left,Right", windowWidth / 2 + 140, windowHeight - 590);
    text("Score:" + this.score, windowWidth / 2 + 300, windowHeight - 400);

    // Draw restart button
    fill(150);
    rect(650, 850, 200, 50);
    textSize(60);
    fill(0);
    text("restart", 675, 890);

    // Draw menu button
    fill(150);
    rect(50, 850, 200, 50);
    textSize(30);
    fill(0);
    text("Back To Menu", 60, 890);

    // Draw grid and game elements
    for (this.gridX = 50; this.gridX < 913 - 100; this.gridX = this.gridX + this.squareSize) {
      for (this.gridY = 50; this.gridY < 948 - 100; this.gridY = this.gridY + this.squareSize) {
        rectMode = CENTER;
        noFill();
        rect(this.gridX, this.gridY, this.squareSize);

        // Display game over message if the game is over
        if (this.losing === true) {
          fill(0, 255, 0);
          rect(windowWidth / 2 + 155, windowHeight / 2 - 65, 430, 100);
          fill(255, 0, 0);
          textSize(100);
          text("game over", windowWidth / 2 + 160, windowHeight / 2);
        }

        // Highlight snake head
        if (this.gridX === this.snakeX && this.gridY === this.snakeY) {
          fill(200, 0, 0);
          rect(this.snakeX, this.snakeY, this.squareSize);
        } else if (this.gridX === this.foodX && this.gridY === this.foodY) {
          // Display food
          fill(0, 0, 255);
          rect(this.foodX, this.foodY, this.squareSize);
        } else {
          // Draw empty grid spaces
          fill(255, 255, 255);
          rect(this.gridX, this.gridY, this.squareSize);
        }
      }
    }

    // Display all snake segments
    for (let q of this.otherSegments) {
      q.display();
    }
  }
}

// Class for individual snake segments (tail)
class snakeSegment {
  constructor(segmentX, segmentY) {
    this.segmentX = segmentX; // X position of the segment
    this.segmentY = segmentY; // Y position of the segment
    this.squareSize = 50; // Size of each segment
  }

  // Display the snake segment
  display() {
    fill(0, 255, 0); // Green color for segments
    rect(this.segmentX, this.segmentY, this.squareSize); // Draw segment
  }
}
