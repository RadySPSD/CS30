class snakeGame {
  constructor() {
    this.squareSize = 50; // Size of each square in the grid
    this.gridX = 50;
    this.gridY = 50;
    
    // Initial position of the snake
    this.snakeX = 400; 
    this.snakeY = 400; 

    // Initial direction of the snake
    this.direction = "right"; 

    // Initial position of the food
    this.foodX = 50 * Math.floor(random(1, 16));
    this.foodY = 50 * Math.floor(random(1, 16));

    // Initial score
    this.score = 0;

    // Speed of snake movement
    this.moveSpeed = 50; 

    // Array to hold snake segments
    this.otherSegments = []; 

    // Game over flag
    this.losing = false; 

    // Checking food variable
    this.foodCheckX = 0;
    this.foodCheckY = 0;
  }

  // Method that shows restart button
  showRestartButton() {
    fill(150);
    rect(650, 850, 200, 50);
    textSize(60);
    fill(0);
    text("restart", 675, 890);
  }

  // Method that makes the restart button work
  restartButton() {
    if (mouseX >= 650 && mouseX <= 850 && mouseY >= 850 && mouseY <= 900 && mouseIsPressed === true) {
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

  // Button that shows the menu button 
  MenuButton() {
    fill(150);
    rect(50, 850, 200, 50);
    textSize(30);
    fill(0);
    text("Back To Menu", 60, 890);
  }

  // Add new segment at snake's current position
  spawningSegments() {
    this.otherSegments.push(new snakeSegment(this.snakeX, this.snakeY)); 
  }

  controls() {
    // Update direction based on key presses
    if (keyCode === 65 || keyCode === LEFT_ARROW) {
      if (this.snakeX > 50 && this.direction !== "right") {
        this.direction = "left";
      }
    } else if (keyCode === 68 || keyCode === RIGHT_ARROW) {
      if (this.snakeX < 800 && this.direction !== "left") {
        this.direction = "right";
      }
    } else if (keyCode === 87 || keyCode === UP_ARROW) {
      if (this.snakeY > 50 && this.direction !== "down") {
        this.direction = "up";
      }
    } else if (keyCode === 83 || keyCode === DOWN_ARROW) {
      if (this.snakeY < 800 && this.direction !== "up") {
        this.direction = "down";
      }
    }
  }

  increaseScore() {
    // Check if snake head is on food
    if (this.snakeX === this.foodX && this.snakeY === this.foodY) {
      this.score++;
      this.spawningSegments(); // Add new segment
      this.foodCheck(); // Reposition food
    }
  }

  foodCheck() {
    // Ensure food does not spawn on snake
    let validPosition = false;
    while (!validPosition) {
      this.foodCheckX = 50 * Math.floor(random(1, 16));
      this.foodCheckY = 50 * Math.floor(random(1, 16));
      validPosition = true;

      if (this.foodCheckX === this.snakeX && this.foodCheckY === this.snakeY) {
        validPosition = false;
      }

      for (let segment of this.otherSegments) {
        if (this.foodCheckX === segment.segmentX && this.foodCheckY === segment.segmentY) {
          validPosition = false;
          break;
        }
      }
    }

    this.foodX = this.foodCheckX;
    this.foodY = this.foodCheckY;
  }

  moveSnake() {
    // Move snake at set intervals
    if (frameCount % 10 === 0) {
      if (!this.losing) {
        let nextX = this.snakeX;
        let nextY = this.snakeY;

        if (this.direction === "right") {
          nextX += this.moveSpeed;
        } else if (this.direction === "left") {
          nextX -= this.moveSpeed;
        } else if (this.direction === "down") {
          nextY += this.moveSpeed;
        } else if (this.direction === "up") {
          nextY -= this.moveSpeed;
        }

        // Game over if snake hits the wall
        if (nextX > 800 || nextX < 50 || nextY > 800 || nextY < 50) {
          this.losing = true;
        } 

        // Update snake segments
        else {
          this.updateTail(nextX, nextY); 
          this.snakeX = nextX;
          this.snakeY = nextY;
        }
      }
    }
  }

  updateTail(nextX, nextY) {
    if (this.losing) return;

    // Check if snake collides with itself
    for (let i = this.otherSegments.length - 1; i > 0; i--) {
      if (nextX === this.otherSegments[i].segmentX && nextY === this.otherSegments[i].segmentY) {
        this.losing = true;
        return;
      }

      this.otherSegments[i].segmentX = this.otherSegments[i - 1].segmentX;
      this.otherSegments[i].segmentY = this.otherSegments[i - 1].segmentY;
    }

    // Move first segment to follow the head
    if (this.otherSegments.length > 0) {
      this.otherSegments[0].segmentX = this.snakeX;
      this.otherSegments[0].segmentY = this.snakeY;
    }
  }

  display() {
    background(200); // Clear background

    // Display game instructions and score
    fill(255, 0, 0);
    textSize(40);
    text("Controls: W,A,S,D", width / 2 + 225, height - 700);
    text("or", width / 2 + 350, height - 640);
    text("Arrow Keys", width / 2 + 270, height - 580);
    text("Score: " + this.score, width / 2 + 310, height - 350);

    // Draw restart button
    this.showRestartButton();

    // Draw menu button
    this.MenuButton();

    // Draw grid
    stroke(0); // Set stroke color for the grid lines
    for (let x = 50; x <= 800; x += 50) {
      for (let y = 50; y <= 800; y += 50) {
        noFill();
        rect(x, y, 50, 50);
      }
    }

    // Draw food
    fill(0, 0, 255);
    rect(this.foodX, this.foodY, this.squareSize, this.squareSize);

    // Draw snake head
    fill(200, 0, 0);
    rect(this.snakeX, this.snakeY, this.squareSize, this.squareSize);

    // Draw snake segments
    for (let segment of this.otherSegments) {
      segment.display();
    }

    // Display game over message if the game is over
    if (this.losing === true) {
      fill(0, 255, 0);
      rect(width / 2 + 170, height / 2 - 45, 430, 100);
      fill(255, 0, 0);
      textSize(100);
      text("game over", width / 2 + 170, height / 2 + 25);
    }
  }
}

// Class for creating new segments
class snakeSegment {
  constructor(segmentX, segmentY) {
    this.segmentX = segmentX;
    this.segmentY = segmentY;
    this.squareSize = 50;
  }

  display() {
    fill(0, 255, 0);
    rect(this.segmentX, this.segmentY, this.squareSize, this.squareSize);
  }
}
