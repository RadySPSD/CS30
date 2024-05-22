class snakeGame {
  constructor() {
    this.squareSize = 50;
    this.gridX = 50;
    this.gridY = 50;
    this.snakeX = 400;
    this.snakeY = 400;
    this.direction = "east";
  }



  controls() {
    // if (keyCode === LEFT_ARROW) {
    //   if (this.snakeX > 50) {
    //     this.snakeX -= 50;
    //   }
    // } else if (keyCode === RIGHT_ARROW) {
    //   if (this.snakeX < 800) {
    //     this.snakeX += 50;
    //   }
    // } else if (keyCode === UP_ARROW) {
    //   if (this.snakeY > 50) {
    //     this.snakeY -= 50;
    //   }
    // } else if (keyCode === DOWN_ARROW) {
    //   if (this.snakeY < 800) {
    //     this.snakeY += 50;
    //   }
    // }

    if (keyCode === 65) {  //left
      if (this.snakeX > 50) {
        if (this.direction!== "right"){
          this.snakeX -= 50;
          this.direction = "left"; 
        }

      }
    } else if (keyCode === 68) { //right
      if (this.snakeX < 800) {
        if (this.direction!== "left"){
          this.snakeX += 50;
          this.direction = "right";
        }
      }
    } else if (keyCode === 87) { //up
      if (this.snakeY > 40) {
        if (this.direction!== "down"){
          this.snakeY -= 50;
          this.direction = "up";
        }
      }
    } else if (keyCode === 83) {  //down
      if (this.snakeY < 800) {
        if (this.direction!== "up"){
          this.snakeY += 50;
          this.direction = "down";
        }
      }
    }
  }



  //class methods
  display() {
    for (this.gridX = 50; this.gridX < 913 - 100; this.gridX = this.gridX + this.squareSize) {
      for (this.gridY = 50; this.gridY < 948 - 100; this.gridY = this.gridY + this.squareSize) {
        rectMode = CENTER;
        noFill();
        rect(this.gridX, this.gridY, this.squareSize);

        if (this.gridX === this.snakeX && this.gridY === this.snakeY) {
          fill(0, 100, 0);
          rect(this.gridX, this.gridY, this.squareSize);

          for (let i = 0; i < 5; i++) {
            if (this.direction === "right") {
              rect(this.gridX - (50 * i), this.gridY, this.squareSize);
            }
            if (this.direction === "left") {
              rect(this.gridX - (50 * i), this.gridY, this.squareSize);
            }
            if (this.direction === "up") {
              rect(this.gridX, this.gridY - (50 * i), this.squareSize);
            }
            if (this.direction === "down") {
              rect(this.gridX, this.gridY - (50 * i), this.squareSize);
            }
          }

        }

        else {
          fill(255, 255, 255);
          rect(this.gridX, this.gridY, this.squareSize);
        }
      }
    }
  }
}